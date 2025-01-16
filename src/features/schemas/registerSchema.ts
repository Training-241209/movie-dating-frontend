import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string({
      message: "Username is required",
    })
    .regex(/^[a-zA-Z0-9_.-]{5,20}$/,
      "Username must be in between 5 - 20 characters and only contain letters, numbers, dots, dashes, and underscores")
    .min(1, "Username is required"),
  password: z
    .string({
      message: "Password is required",
    })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must be a minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character")
    .min(1, "Password is required"),
  confirmPassword: z
    .string({
      message: "Confirm password is required",
    })
    .min(1, "Confirm password is required"),
  firstName: z
    .string({
      message: "First name is required",
    })
    .min(1, "First name is required"),
  lastName: z
    .string({
      message: "Last name is required",
    })
    .min(1, "Last name is required"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export type RegisterSchema = z.infer<typeof registerSchema>;
