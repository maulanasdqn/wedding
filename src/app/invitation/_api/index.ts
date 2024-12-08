import { api } from "@/libs/axios/config";
import { TReservationRequest, TReservationResponse } from "../_entities/type";

export type TMeta = {
  page?: number;
  perPage?: number;
  search?: string;
};

export const getReservations = async (
  params?: TMeta,
): Promise<TReservationResponse> => {
  const { data } = await api({
    method: "GET",
    url: "/reservations",
    params,
  });
  return data;
};

export const postCreateReservation = async (
  body: TReservationRequest,
): Promise<unknown> => {
  const { data } = await api({
    method: "POST",
    url: "/reservations/create",
    data: body,
  });
  return data;
};

export const postUploadAudio = async (
  file: File,
): Promise<{
  file_url: string;
}> => {
  const formData = new FormData();
  formData.append("file", file);
  const { data } = await api({
    method: "POST",
    url: "/upload",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};
