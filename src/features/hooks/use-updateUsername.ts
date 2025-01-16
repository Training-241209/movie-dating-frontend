import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios-config";
import { toast } from "sonner";

export function useUpdateUsername(){
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async(username:string) =>{
            const token = "Bearer " + queryClient.getQueryData<{ token: string }>(["auth"])?.token;
            console.log(token)
            const resp = await axiosInstance.patch("/account/update-username", {username},
                {
                    headers: {
                        Authorization: token,
                      },
                }
            )
            return resp.data;
        },
        onSuccess: (data) => {
            toast.success("UsernameUpdated.");
            localStorage.removeItem("token")
            queryClient.invalidateQueries({
                queryKey: ["users"],
            });
            queryClient.invalidateQueries({
                queryKey: ["auth"],
            });
            queryClient.setQueryData(["auth"], data);
            localStorage.setItem("token", data.token);
        },
        onError: (e: any) => {
            toast.error(e.response?.data);
        },
    })
}