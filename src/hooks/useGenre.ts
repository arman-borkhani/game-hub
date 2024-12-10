import { useQuery } from "react-query"
import APIClient from "@/services/api-client"
import genres from "@/data/genres"

const apiClient = new APIClient<Genre>('/genres')

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => useQuery({
  queryKey: ['genres'],
  queryFn: apiClient.getAll,
  staleTime: 20 * 60 * 60 * 1000, // 24h
  initialData: { count: genres.length, next: null, results: genres }
})

export default useGenre