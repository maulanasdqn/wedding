import { useForm, Controller } from "react-hook-form";
import { FC, Suspense, useState } from "react";
import { lazily } from "react-lazily";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaInvitation } from "../_entities/schema";
import { InvitationFormSkeleton } from "../loading";
import { TReservationRequest } from "../_entities/type";
import { usePostCreateReservation } from "../_hooks/use-post-create-reservation";
import { useGetReservations } from "../_hooks/use-get-reservations";
import { usePostUploadAudio } from "../_hooks/use-post-upload-audio";
const { Button } = lazily(() => import("@/app/_components/ui/button"));
const { InputText } = lazily(() => import("@/app/_components/ui/inputs/text"));
const { TextArea } = lazily(
  () => import("@/app/_components/ui/inputs/text-area"),
);
const { Select } = lazily(() => import("@/app/_components/ui/inputs/select"));
const { AudioRecorder } = lazily(() => import("react-audio-voice-recorder"));

export const InvitationForm: FC = () => {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { isValid, errors },
  } = useForm<TReservationRequest>({
    resolver: zodResolver(schemaInvitation),
    mode: "all",
    defaultValues: {
      fullname: "",
      speech: "",
      speech_audio: "",
      attendance: "",
    },
  });

  const { data, refetch } = useGetReservations({
    page: 1,
    perPage: 100,
  });

  const attendenceOptions = [
    {
      value: "",
      label: "Pilih Kehadiran",
    },
    {
      value: "true",
      label: "Hadir",
    },

    {
      value: "false",
      label: "Tidak Hadir",
    },
  ];

  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);

  const audioValue = watch("speech_audio");

  const handleRecordingComplete = (blob: Blob) => {
    const url = URL.createObjectURL(blob);
    setValue("speech_audio", url, { shouldValidate: true });
    setAudioBlob(blob);
  };

  const { mutate } = usePostCreateReservation();
  const { mutate: upload } = usePostUploadAudio();

  const onSubmit = handleSubmit((data) => {
    upload(audioBlob as File, {
      onSuccess: (res) => {
        mutate(
          {
            ...data,
            speech_audio: res.file_url,
          },
          {
            onSuccess: () => {
              refetch();
            },
          },
        );
      },
    });
  });

  return (
    <section
      id="rsvp"
      className="flex flex-col bg-gray-50 p-4 my-4 rounded-lg w-full h-full"
    >
      <form onSubmit={onSubmit} className="flex flex-col gap-y-4">
        <Suspense fallback={<InvitationFormSkeleton />}>
          <InputText
            required
            message={errors.fullname?.message}
            placeholder="Masukkan Nama Lengkap"
            control={control}
            name="fullname"
            label="Nama Lengkap"
          />
          <Select
            message={errors.attendance?.message}
            options={attendenceOptions}
            control={control}
            name="attendance"
            label="Kehadiran"
          />
          <TextArea
            message={errors.speech?.message}
            required
            placeholder="Masukkan Ucapan"
            control={control}
            name="speech"
            label="Ucapan"
          />
          <Controller
            name="speech_audio"
            control={control}
            render={({ fieldState: { error } }) => (
              <div className="flex flex-col gap-y-1">
                <span>Ucapkan dengan VN</span>
                <AudioRecorder
                  onRecordingComplete={handleRecordingComplete}
                  downloadOnSavePress
                  downloadFileExtension="webm"
                  mediaRecorderOptions={{
                    audioBitsPerSecond: 128000,
                  }}
                />
                {error && (
                  <p className="text-red-500 text-sm mt-1">{error.message}</p>
                )}
              </div>
            )}
          />
          {audioValue && (
            <div className="mt-2">
              <p className="font-semibold">Audio Preview:</p>
              <audio controls className="mt-1">
                <source src={audioValue} type="audio/webm" />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}
          <Button disabled={!isValid} type="submit">
            Kirim Ucapan
          </Button>
        </Suspense>
      </form>

      {data && (
        <>
          {data?.data?.map((x) => (
            <div className="mt-6 p-4 border border-gray-300 rounded-md">
              <h2 className="font-bold text-lg mb-2">
                {x?.attendance === "true"
                  ? `${x.fullname} - Hadir`
                  : `${x.fullname} - Tidak Hadir`}
              </h2>
              <p></p>
              <p>{x.speech}</p>
              {x.speech_audio && (
                <div className="mt-2">
                  <audio controls className="mt-1">
                    <source src={x.speech_audio} type="audio/webm" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </section>
  );
};
