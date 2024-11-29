export type TFormInputs = {
  fullname: string;
  greeting: string;
  attendence: string;
  audio: string;
};

export type TSubmittedData = {
  fullname: string;
  greeting: string;
  attendence: string;
  audio: string | null;
};

export type TCountdownProps = {
  targetDate: Date;
};

export type TTimeBoxProps = { label: string; value: number };
