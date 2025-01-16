import { axiosInstance } from "@/lib/axios-config";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "@tanstack/react-router";
import { toast } from "sonner";

export function useLogout() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: async () => {
      const token = "Bearer " + queryClient.getQueryData<{ token: string }>(["auth"])?.token;

      const resp = await axiosInstance.post("/account/logout", null, {
        headers: {
          "Authorization": token,
        },
      });
      return resp.data;
    },
    onSuccess: () => {
      toast.success("Logged out successfully");
      localStorage.clear();
      router.navigate({ to: "/auth/login" });
      queryClient.invalidateQueries({
        queryKey: ["auth"],
      });
    },
    onError: () => {
      toast.error("Failed to log out");
    },
  });
}

