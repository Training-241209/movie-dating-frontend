import { z } from "zod"

export const chatSchema = z.object({
    id: z.number(),
    chatId: z.string(),
    senderId: z.string(),
    recipientId: z.string(),
    content: z.string(),
    timestamp: z.date(),
});
export type ChatSchema = z.infer<typeof chatSchema>;