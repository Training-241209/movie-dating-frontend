import { useMutation } from "@tanstack/react-query";
import { RegisterSchema } from "../schemas/registerSchema";
import { axiosInstance } from "@/lib/axios-config";
import { useRouter } from "@tanstack/react-router";
import { toast } from "sonner";

export function useRegister() {
    const router = useRouter();

    return useMutation({
        mutationFn: async (values: RegisterSchema) => {
            const response = await axiosInstance.post<{ message: string }>("/account/register", values);
            return response.data;
        },
        onSuccess: () => {
            toast.success("Registered successfully.");
            router.navigate({ to: "/auth/login" });
        },
        onError: (error: any) => {
            const errorMessage = error.response?.data?.message || "An error occurred. Please try again.";
            toast.error(errorMessage);
        },
    });
}
