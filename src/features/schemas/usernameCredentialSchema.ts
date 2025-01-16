import { z } from "zod";
export const usernameSchema = z.object({
    username: z
      .string({
        message: "username is required",
      })
      .min(1, "username is required"),
    
    newUsername: z
    .string({
      message: "username is required",
    })
    .regex(/^[a-zA-Z0-9_.-]{5,20}$/,
      "Username must be in between 5 - 20 characters and only contain letters, numbers, dots, dashes, and underscores")
    .min(1, "username is required"),
  });
  
  
  export type UsernameSchema = z.infer<typeof usernameSchema>;