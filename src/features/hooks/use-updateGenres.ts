import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios-config";
import { toast } from "sonner";
import { useRouter } from "@tanstack/react-router";

export function useUpdateGenres(){
    const queryClient = useQueryClient();
    const router = useRouter()
    return useMutation({
        mutationFn: async ({genreId,movieId}:{genreId:number,movieId:number}) => {
            const token = "Bearer " + queryClient.getQueryData<{ token: string }>(["auth"])?.token;
            console.log(token)
            const resp = await axiosInstance.patch("account/update-favorites", {genreId,movieId},
                {
                    headers: {
                        Authorization: token,
                      },
                }
            )
            return resp.data;
        },
        onSuccess: () => {
            toast.success("Movie and Genre Updated.");
            queryClient.invalidateQueries({
                queryKey: ["users"],
            });
            router.navigate({to: '/dashboard'})
        },
        onError: (e: any) => {
            toast.error(e.response?.data);
        },
    })
}