import { isAxiosError } from "axios"
import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { authorizedFetcher } from "../services/axios"
import {
  APIMovieResult,
  APIPersonResult,
  APIResponse,
  APITVResult,
} from "../types/API"

export type Data = APIMovieResult | APITVResult | APIPersonResult

export type SearchState = {
  // state
  type: string
  searchQuery: string
  status: "pending" | "resolved" | "rejected" | "idle"
  error: null | Error
  data: Data[] | null
  totalItems: number
  page: number

  // actions
  getData: () => void
  setPage: (page: number) => void
  setSearchData: (data: { type: string; query: string }) => void
}

export const useSearchStore = create<SearchState>()(
  devtools((set, get) => ({
    // state
    type: "movie",
    status: "idle",
    error: null,
    data: [],
    totalItems: 0,
    page: 1,
    searchQuery: "",

    // actions
    getData: async () => {
      const { type, searchQuery: query, page } = get()
      set({ status: "pending" })
      try {
        type T = APIResponse<Data>
        const url = `search/${type}?query=${query}&page=${page}`
        console.log(url)
        const response = await authorizedFetcher.get<T>(url)

        set({
          status: "resolved",
          data: response.data.results,
          totalItems: response.data.total_results,
        })
      } catch (error) {
        let customError

        if (isAxiosError(error)) {
          customError = new Error(error.response?.data.status_message)
        } else if (error instanceof Error) {
          customError = error
        } else {
          customError = new Error(
            "Unknown error: Something went wrong! @searchStore"
          )
        }

        console.error(error)
        set({ error: customError, status: "rejected" })
      }
    },

    setPage(page: number) {
      set({ page })
      get().getData()
    },

    setSearchData(data: { type: string; query: string }) {
      set({ type: data.type, searchQuery: data.query, page: 1 })
      get().getData()
    },
  }))
)
