import { isAxiosError } from "axios"
import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { authorizedFetcher } from "../services/axios"
import { APIResponse, APIResponseTV } from "../types/API"

export const queriesMap = new Map([
  ["all", "discover/tv"],
  ["popular", "tv/popular"],
  ["top rated", "tv/top_rated"],
  ["airing today", "tv/airing_today"],
  ["on the air", "tv/on_the_air"],
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

export type TvState = {
  tvs: APIResponseTV[]
  page: number
  totalItems: number
  tvTypeQuery: Query
  sortQuery: Sort
  status: "pending" | "resolved" | "rejected" | "idle"
  error: null | Error
  filter: Filter
  setQuery: (query: Query) => void
  setSort: (sort: Sort) => void
  getTvs: () => void
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

export const useTvStore = create<TvState>()(
  devtools((set, get) => ({
    tvs: [],
    page: 1,
    totalItems: 0,
    tvTypeQuery: "discover/tv",
    sortQuery: "popularity.desc",
    status: "idle",
    error: null,
    filter: defaultFilter,
    setQuery: (query) => {
      const { getTvs, resetFilter } = get()
      set({ tvTypeQuery: query })
      resetFilter()
      getTvs()
    },
    setSort: (sort) => {
      const { getTvs } = get()
      set({ sortQuery: sort })
      getTvs()
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
      get().getTvs()
    },
    setPage(page: number) {
      set({ page })
      get().getTvs()
    },
    getTvs: async () => {
      const BASE_URL = import.meta.env.VITE_APP_BASE_API
      const { tvTypeQuery, sortQuery, filter, page } = get()
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
          APIResponse<APIResponseTV>
        >(
          `${BASE_URL}/${tvTypeQuery}?page=${page}&sort_by=${sortQuery}${keywordsQuery}${languageQuery}${voteAvgQuery}${genresQuery}`
        )

        set({
          tvs: response.data.results,
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
            "Unknown error: Something went wrong! @tvStore"
          )
        }

        console.error(error)

        set({ error: customError, status: "rejected" })
      }
    },
  }))
)
