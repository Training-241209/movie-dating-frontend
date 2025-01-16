import axios from "axios";

export const axiosInstanceExternal = axios.create({
    baseURL: import.meta.env.VITE_TMDB_API_URL,
    withCredentials: false,
    headers: {
        'Content-Type': "application/json",
        'Authorization': `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
    }
})
