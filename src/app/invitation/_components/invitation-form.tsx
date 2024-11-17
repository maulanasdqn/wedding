import { useState } from "react";
import { Button } from "@/components/ui/button";
import { InputText } from "@/components/ui/inputs/text";
import { TextArea } from "@/components/ui/inputs/text-area";
import { AudioRecorder } from "react-audio-voice-recorder";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Select } from "@/components/ui/inputs/select";

type FormInputs = {
  fullname: string;
  greeting: string;
  attendence: string;
  audio: string;
};

type SubmittedData = {
  fullname: string;
  greeting: string;
  attendence: string;
  audio: string | null;
};

export const InvitationForm: React.FC = () => {
  const { control, handleSubmit, setValue, watch, reset } = useForm<FormInputs>(
    {
      defaultValues: {
        fullname: "",
        greeting: "",
        audio: "",
        attendence: "",
      },
    },
  );

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

  const [submittedData, setSubmittedData] = useState<SubmittedData | null>(
    null,
  );
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);

  const audioValue = watch("audio");

  const handleRecordingComplete = (blob: Blob) => {
    const url = URL.createObjectURL(blob);
    setValue("audio", url, { shouldValidate: true });
    setAudioBlob(blob);
  };

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
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
  };

  return (
    <section className="flex flex-col">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
        <InputText
          required
          placeholder="Masukkan Nama Lengkap"
          control={control}
          name="fullname"
          label="Nama Lengkap"
        />
        <Select
          options={attendenceOptions}
          control={control}
          name="attendence"
          label="Kehadiran"
        />
        <TextArea
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
              <span>Ucapan dengan VN</span>
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
        <Button type="submit">Kirim Ucapan</Button>
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
