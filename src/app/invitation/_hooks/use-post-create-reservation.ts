import { postCreateReservation } from "../_api";
import { TReservationRequest } from "../_entities/type";
import { useMutation, UseMutationResult } from "@tanstack/react-query";

export const usePostCreateReservation = (): UseMutationResult<
  unknown,
  unknown,
  TReservationRequest,
  unknown
> => {
  return useMutation({
    mutationKey: ["create-reservation"],
    mutationFn: async (body) => await postCreateReservation(body),
  });
};
