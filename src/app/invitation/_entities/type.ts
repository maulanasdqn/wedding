import { z } from "zod";
import { schemaInvitation } from "./schema";

export type TReservationRequest = z.infer<typeof schemaInvitation>;

export type TReservationResponse = {
  data: TReservationRequest[];
};

export type TCountdownProps = {
  targetDate: Date;
};

export type TTimeBoxProps = { label: string; value: number };
