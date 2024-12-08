import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getReservations, TMeta } from "../_api";
import { TReservationResponse } from "../_entities/type";

export const useGetReservations = (
  params?: TMeta,
): UseQueryResult<TReservationResponse, unknown> => {
  return useQuery({
    queryKey: ["get-reservations", params],
    queryFn: async () => await getReservations(params),
  });
};
