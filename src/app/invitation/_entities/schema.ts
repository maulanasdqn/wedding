import { z } from "zod";
import { badWordRegex } from "./regex";

export const schemaInvitation = z.object({
  fullname: z
    .string()
    .min(1, "Nama lengkap harus diisi")
    .refine(
      (value) => !badWordRegex.test(value),
      "Kata tersebut tidak diperbolehkan",
    ),
  speech: z
    .string()
    .min(1, "Ucapan harus diisi")
    .min(30, "Ucapan Minimal 30 karakter")
    .refine(
      (value) => !badWordRegex.test(value),
      "Kata tersebut tidak diperbolehkan",
    ),
  speech_audio: z.string().optional(),
  attendance: z.string().min(1, "Kehadiran harus dipilih"),
});
