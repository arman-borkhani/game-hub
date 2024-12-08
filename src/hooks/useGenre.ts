import { useQuery } from "react-query"
import apiClient, { FetchResponse } from "@/services/api-client";
import genres from "@/data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => useQuery({
  queryKey: ['genres'],
  queryFn: () => 
    apiClient
    .get<FetchResponse<Genre>>('/genres').then(res => res.data),
  staleTime: 20 * 60 * 60 * 1000, // 24h
  initialData: { count: genres.length, results: genres }
})

export default useGenre