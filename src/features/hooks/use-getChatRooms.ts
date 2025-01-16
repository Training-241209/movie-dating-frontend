import { axiosInstance } from "@/lib/axios-config";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./use-Auth";
export function useGetChatRooms() {
    const {data: auth} = useAuth()
    return useQuery({
        queryKey: ['chatRooms'],
        queryFn: async() =>{
              const response = await axiosInstance.get(`http://localhost:8080/api/match/${auth?.username}`)
              console.log("DATA ",response.data)
              return response.data;

        }
    })
}