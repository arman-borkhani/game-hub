import axios from "axios"

export interface FetchResponse<T> {
  count: number;
  results: T[]; 
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b06f89381fe34e8197a0e976377e30cb"
  }
})