import { z } from "zod";

export const chatRoomUserSchema = z.object({
    id: z.string(),
    chatId: z.string(),
    senderId: z.string(),
    recipientId: z.string(),
});

export type ChatRoomUserSchema = z.infer<typeof chatRoomUserSchema>;