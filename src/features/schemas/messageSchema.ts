
import { z } from "zod";

export const messageSchema = z.object({
  message: z
    .string({
      message: "Message is required",
    })
    .min(1, "Message is required"),
});


export type MessageSchema = z.infer<typeof messageSchema>;
