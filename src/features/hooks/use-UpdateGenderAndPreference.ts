import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios-config";
import { toast } from "sonner";
import { useRouter} from "@tanstack/react-router";

interface GenderPreferenceDTO {
  gender: string;
  genderPreference: string;
}

export function useUpdateGenderAndPreference() {
  const queryClient = useQueryClient();
  const router = useRouter()
  return useMutation<unknown, unknown, GenderPreferenceDTO>({
    mutationFn: async (data: GenderPreferenceDTO) => {
      const token = "Bearer " + queryClient.getQueryData<{ token: string }>(["auth"])?.token;
      console.log(token);
      const response = await axiosInstance.patch("account/update-gender-and-preference", data, {
        headers: {
          Authorization: token,
        },
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth"] });
      toast.success("Gender and preference updated successfully!");
      router.navigate({to: '/genreSelection'})
    },
    onError: (error: any) => {
      toast.error(error?.response?.data || "An error occurred while updating.");
    },
  });
}
