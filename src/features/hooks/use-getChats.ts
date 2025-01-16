import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios-config";

export function useGetChats({ sender, recipient }: { sender: string; recipient: string }) {
  return useQuery({
    queryKey: ['chats', sender, recipient],
    queryFn: async () => {
      const response = await axiosInstance.get(`http://localhost:8080/messages/${sender}/${recipient}`);
      console.log(response.data);
      return response.data;
    },
      refetchInterval: 1000,
  });
}