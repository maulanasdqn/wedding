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
  greeting: z
    .string()
    .min(1, "Ucapan harus diisi")
    .min(30, "Ucapan Minimal 30 karakter")
    .refine(
      (value) => !badWordRegex.test(value),
      "Kata tersebut tidak diperbolehkan",
    ),
  attendence: z.string().min(1, "Kehadiran harus dipilih"),
  audio: z.string().optional(),
});
