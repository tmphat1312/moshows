import { isAxiosError } from "axios"
import { create } from "zustand"
import { authorizedFetcher } from "../services/axios"
import { APIResponse, APIResponseMovie } from "../types/API"
import { devtools } from "zustand/middleware"

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
  ["vote average desc", "vote_average.desc"],
  ["vote average asc", "vote_average.asc"],
  ["release date desc", "release_date.desc"],
  ["release date asc", "release_date.asc"],
  ["Title (A-Z)", "original_title.asc"],
  ["Title (Z-A)", "original_title.desc"],
])

export const queries = Array.from(queriesMap.keys())
export const sorts = Array.from(sortsMap.keys())
export type Query = (typeof queries)[number]
export type Sort = (typeof sorts)[number]
export type Filter = {
  keywords: number[]
  language: string
  voteAvg: number | null
  genres: Set<number>
}

export type MovieState = {
  movies: APIResponseMovie[]
  page: number
  totalItems: number
  movieTypeQuery: Query
  sortQuery: Sort
  status: "pending" | "resolved" | "rejected" | "idle"
  error: null | Error
  filter: Filter
  setQuery: (query: Query) => void
  setSort: (sort: Sort) => void
  getMovies: () => void
  setKeywords: (keywords: number[]) => void
  setLanguage: (language: string) => void
  setVoteAvg: (voteAvg: number | null) => void
  toggleGenre: (genre: number) => void
  resetFilter: () => void
  setPage: (page: number) => void
}

const defaultFilter: Filter = {
  keywords: [],
  language: "en",
  voteAvg: null,
  genres: new Set<number>(),
}

export const useMovieStore = create<MovieState>()(
  devtools((set, get) => ({
    movies: [],
    movieTypeQuery: "discover/movie",
    sortQuery: "popularity.desc",
    status: "idle",
    error: null,
    filter: defaultFilter,
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
    setKeywords(keywords: number[]) {
      const { filter } = get()
      set({ filter: { ...filter, keywords } })
    },
    setLanguage(language: string) {
      const { filter } = get()
      set({ filter: { ...filter, language } })
    },
    setVoteAvg(voteAvg: number | null) {
      const { filter } = get()
      set({ filter: { ...filter, voteAvg } })
    },
    toggleGenre(genre: number) {
      const { filter } = get()
      const genres = new Set(filter.genres)

      if (genres.has(genre)) {
        genres.delete(genre)
      } else {
        genres.add(genre)
      }
      set({ filter: { ...filter, genres } })
      return
    },
    resetFilter() {
      set({
        filter: defaultFilter,
      })
      get().getMovies()
    },
    setPage(page: number) {
      set({ page })
      get().getMovies()
    },
    getMovies: async () => {
      const BASE_URL = import.meta.env.VITE_APP_BASE_API
      const { movieTypeQuery, sortQuery, filter, page } = get()
      const genresArray = Array.from(filter.genres.values())

      const keywordsQuery =
        filter.keywords.length > 0
          ? `&with_keywords=${filter.keywords.join(",")}`
          : ""
      const languageQuery =
        filter.language.length > 0
          ? `&with_original_language=${filter.language}`
          : ""
      const voteAvgQuery =
        filter.voteAvg !== null ? `&vote_average.gte=${filter.voteAvg}` : ""
      const genresQuery =
        genresArray.length > 0 ? `&with_genres=${genresArray.join(",")}` : ""

      set({ status: "pending" })

      try {
        const response = await authorizedFetcher.get<
          APIResponse<APIResponseMovie>
        >(
          `${BASE_URL}/${movieTypeQuery}?page=${page}&sort_by=${sortQuery}${keywordsQuery}${languageQuery}${voteAvgQuery}${genresQuery}`
        )

        set({
          movies: response.data.results,
          status: "resolved",
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
            "Unknown error: Something went wrong! @movieStore"
          )
        }

        console.error(error)

        set({ error: customError, status: "rejected" })
      }
    },
  }))
)
