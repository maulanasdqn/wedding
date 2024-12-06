import { useForm, Controller } from "react-hook-form";
import { FC, Suspense, useState } from "react";
import { lazily } from "react-lazily";
import type { TFormInputs, TSubmittedData } from "../_entities/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaInvitation } from "../_entities/schema";
import { InvitationFormSkeleton } from "../loading";
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
    reset,
    formState: { isValid, errors },
  } = useForm<TFormInputs>({
    resolver: zodResolver(schemaInvitation),
    mode: "all",
    defaultValues: {
      fullname: "",
      greeting: "",
      audio: "",
      attendence: "",
    },
  });

  const attendenceOptions = [
    {
      value: "true",
      label: "Hadir",
    },

    {
      value: "false",
      label: "Tidak Hadir",
    },
  ];

  const [submittedData, setSubmittedData] = useState<TSubmittedData | null>(
    null,
  );
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);

  const audioValue = watch("audio");

  const handleRecordingComplete = (blob: Blob) => {
    const url = URL.createObjectURL(blob);
    setValue("audio", url, { shouldValidate: true });
    setAudioBlob(blob);
  };

  const onSubmit = handleSubmit((data) => {
    const formData = new FormData();
    formData.append("fullname", data.fullname);
    formData.append("greeting", data.greeting);

    let audioFile: File | null = null;
    if (audioBlob) {
      audioFile = new File([audioBlob], "voice-note.webm", {
        type: "audio/webm",
      });
      formData.append("audio", audioFile);
    }

    setSubmittedData({
      fullname: data.fullname,
      greeting: data.greeting,
      audio: audioFile ? URL.createObjectURL(audioFile) : null,
      attendence: data.attendence,
    });

    reset({});
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
            message={errors.attendence?.message}
            options={attendenceOptions}
            control={control}
            name="attendence"
            label="Kehadiran"
          />
          <TextArea
            message={errors.greeting?.message}
            required
            placeholder="Masukkan Ucapan"
            control={control}
            name="greeting"
            label="Ucapan"
          />
          <Controller
            name="audio"
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

      {submittedData && (
        <div className="mt-6 p-4 border border-gray-300 rounded-md">
          <h2 className="font-bold text-lg mb-2">
            {submittedData.attendence === "true"
              ? `${submittedData.fullname} - Hadir`
              : `${submittedData.fullname} - Tidak Hadir`}
          </h2>
          <p></p>
          <p>{submittedData.greeting}</p>
          {submittedData.audio && (
            <div className="mt-2">
              <audio controls className="mt-1">
                <source src={submittedData.audio} type="audio/webm" />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}
        </div>
      )}
    </section>
  );
};
