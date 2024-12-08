import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { postUploadAudio } from "../_api";

export const usePostUploadAudio = (): UseMutationResult<
  { file_url: string },
  unknown,
  File,
  unknown
> => {
  return useMutation({
    mutationKey: ["upload-audio"],
    mutationFn: async (file) => await postUploadAudio(file),
  });
};
