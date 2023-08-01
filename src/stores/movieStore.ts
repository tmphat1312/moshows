import { isAxiosError } from "axios"
import { create } from "zustand"
import { authorizedFetcher } from "../services/axios"
import { APIResponse, APIResponseMovie } from "../types/API"

export const queriesMap = new Map([
  ["all", "discover/movie"],
  ["popular", "movie/popular"],
  ["top rated", "movie/top_rated"],
  ["upcoming", "movie/upcoming"],
  ["now playing", "movie/now_playing"],
])
export const sortsMap = new Map([
  ["popularity desc", "popularity.desc"],
  ["popularity asc", "popularity.asc"],
  ["revenue desc", "revenue.desc"],
  ["revenue asc", "revenue.asc"],
  ["vote average asc", "vote_average.asc"],
  ["vote average desc", "vote_average.desc"],
])

export const queries = Array.from(queriesMap.keys())
export const sorts = Array.from(sortsMap.keys())
export type Query = (typeof queries)[number]
export type Sort = (typeof sorts)[number]

export type MovieState = {
  movies: APIResponseMovie[]
  movieTypeQuery: Query
  sortQuery: Sort
  status: "pending" | "resolved" | "rejected" | "idle"
  error: null | Error
  setQuery: (query: Query) => void
  setSort: (sort: Sort) => void
  getMovies: () => void
}

export const useMovieStore = create<MovieState>()((set, get) => ({
  movies: [],
  movieTypeQuery: "discover/movie",
  sortQuery: "popularity.desc",
  status: "idle",
  error: null,
  setQuery: (query) => {
    const { getMovies } = get()
    set({ movieTypeQuery: query })
    getMovies()
  },
  setSort: (sort) => {
    const { getMovies } = get()
    set({ sortQuery: sort })
    getMovies()
  },
  getMovies: async () => {
    const { movieTypeQuery, sortQuery } = get()
    const BASE_URL = import.meta.env.VITE_APP_BASE_API

    set({ status: "pending" })

    try {
      const response = await authorizedFetcher.get<
        APIResponse<APIResponseMovie>
      >(`${BASE_URL}/${movieTypeQuery}?sort_by=${sortQuery}`)

      set({ movies: response.data.results, status: "resolved" })
    } catch (error) {
      let customError
      if (isAxiosError(error)) {
        customError = new Error(error.response?.data.status_message)
      } else if (error instanceof Error) {
        customError = error
      } else {
        customError = new Error(
          "Unknown error: Something went wrong! @movieStore"
        )
      }

      console.error(error)

      set({ error: customError, status: "rejected" })
    }
  },
}))
