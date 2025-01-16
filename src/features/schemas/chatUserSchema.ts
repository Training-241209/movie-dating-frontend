import { z } from "zod";

export const chatUserSchema = z.object({
    name: z.string(),
    status: z.enum(["ONLINE", "OFFLINE"])
});

export type ChatUserSchema = z.infer<typeof chatUserSchema>;