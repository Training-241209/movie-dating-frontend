import { z } from "zod";

export const passwordSchema = z.object({

  password: z
    .string({
      message: "Password is required",
    })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must be a minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character")
    .min(1, "Password is required"),
    
  newPassword: z
    .string({
      message: "Password is required",
    }).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must be a minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character")
    .min(1, "Password is required"),
  confirmNewPassword: z
    .string({
      message: "Confirm password is required",
    })
    .min(1, "Confirm password is required"),

});

export type PasswordSchema = z.infer<typeof passwordSchema>;
