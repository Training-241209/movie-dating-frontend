import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "@tanstack/react-router";
import { LoginSchema } from "../schemas/loginSchema";
import { axiosInstance } from "@/lib/axios-config";


export function useLogin() {
    const queryClient = useQueryClient();
    const router = useRouter();

    return useMutation({
        mutationFn: async (values: LoginSchema) => {
            const resp = await axiosInstance.post("/account/login", values);
            return resp.data;
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["auth"],
            });
            queryClient.setQueryData(["auth"], data);
            localStorage.setItem("token", data.token);
            toast.success("Logged in successfuly.");
            router.navigate({ to: "/dashboard"});
        },
        onError: () => {
            toast.error("Failed to login.");
        },
    })

}