import { axiosInstance } from "@/lib/axios-config";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { useRouter } from "@tanstack/react-router";

export function useAuth(): UseQueryResult<{
     accountID: number,
     username: string,
     firstName: string,
     lastName: string,
     gender: string,
     genderPreference: string,
     favoriteMovie: string,
     favoriteGenre: string
    }> {
  const router = useRouter();

  return useQuery({
    queryKey: ["auth"],
    queryFn: async () => {
      try {
        const resp = await axiosInstance.get("/account/me");
        return resp.data;
      } catch (e) {
        console.error(e);
        router.navigate({ to: "/auth/login" });
        return null;
      }
    },
    staleTime: 1000 * 60 * 5, // 5 mins
    gcTime: 1000 * 60 * 10, // 10 mins
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
}
