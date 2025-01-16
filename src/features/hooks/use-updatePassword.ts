import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios-config";
import { toast } from "sonner";

interface passwordDTO{
    password: string
}
export function useUpdatePassword(){
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async(data: passwordDTO) =>{
            console.log(data)
            const resp = await axiosInstance.patch("/account/update-password", data,
               
            )
            return resp.data;
        },
        onSuccess: () => {
            toast.success("Password Updated.");
            queryClient.invalidateQueries({
                queryKey: ["users"],
            });
        },
        onError: (e: any) => {
            toast.error(e.response?.data);
        },
    })
}