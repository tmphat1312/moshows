import { devtools } from "zustand/middleware"
import { isAxiosError } from "axios"
import { create } from "zustand"
import { authorizedFetcher } from "../services/axios"
import { APIResponse, APIResponseMovie, APIResponseTV } from "../types/API"

export type Filter = {
  keywords: number[]
  language: string
  voteAvg: number | null
  genres: Set<number>
  includeAdult: boolean
}

const defaultFilter: Filter = {
  keywords: [],
  language: "en",
  voteAvg: null,
  genres: new Set<number>(),
  includeAdult: false,
}

function urlMap({ tabQuery, sortQuery, filter, page }: ShowcaseState) {
  const BASE_URL = import.meta.env.VITE_APP_BASE_API
  const genresArray = Array.from(filter.genres.values())

  const pageQuery = `&page=${page}`
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
  const adultQuery = filter.includeAdult ? "&include_adult=true" : ""

  return (
    BASE_URL +
    "/" +
    tabQuery +
    "?sort_by=" +
    sortQuery +
    pageQuery +
    keywordsQuery +
    languageQuery +
    voteAvgQuery +
    genresQuery +
    adultQuery
  )
}

export type Data = APIResponseMovie[] | APIResponseTV[]

export type ShowcaseState = {
  // state
  type: "movie" | "tv"
  status: "pending" | "resolved" | "rejected" | "idle"
  error: null | Error
  data: Data | null
  totalItems: number
  page: number
  tabQuery: string
  sortQuery: string
  filter: Filter
  // actions
  setType: (type: "movie" | "tv") => void
  getData: () => void
  setPage: (page: number) => void
  setQuery: (query: string) => void
  setSort: (sort: string) => void
  setKeywords: (keywords: number[]) => void
  setLanguage: (language: string) => void
  setVoteAvg: (voteAvg: number | null) => void
  setIncludeAdult: (includeAdult: boolean) => void
  toggleGenre: (genre: number) => void
  setFilter: (newFilter: Filter) => void
  resetFilter: () => void
}

export const useShowcaseStore = create<ShowcaseState>()(
  devtools((set, get) => ({
    // state
    type: "movie",
    status: "idle",
    error: null,
    data: [],
    totalItems: 0,
    page: 1,
    tabQuery: "discover/movie",
    sortQuery: "popularity.desc",
    filter: defaultFilter,
    // actions
    setType: (type) => {
      set({ type, page: 1, tabQuery: `discover/${type}` })
      get().getData()
    },

    getData: async () => {
      const url = urlMap(get())

      set({ status: "pending" })
      try {
        type T = APIResponse<APIResponseMovie>
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
            "Unknown error: Something went wrong! @movieStore"
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

    setQuery: (query) => {
      set({ tabQuery: query, page: 1 })
      get().resetFilter()
      get().getData()
    },

    setSort: (sort) => {
      set({ sortQuery: sort })
      get().getData()
    },

    setKeywords(keywords: number[]) {
      const newFilter = { ...structuredClone(get().filter), keywords }
      set({ filter: newFilter })
    },

    setLanguage(language: string) {
      const newFilter = { ...structuredClone(get().filter), language }
      set({ filter: newFilter })
    },

    setVoteAvg(voteAvg: number | null) {
      const newFilter = { ...structuredClone(get().filter), voteAvg }
      set({ filter: newFilter })
    },

    setIncludeAdult(includeAdult: boolean) {
      const newFilter = { ...structuredClone(get().filter), includeAdult }
      set({ filter: newFilter })
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
    },

    setFilter(newFilter) {
      const clonedFilter = structuredClone(newFilter)
      set({ filter: clonedFilter })
    },

    resetFilter() {
      set({
        filter: defaultFilter,
        page: 1,
      })
      get().getData()
    },
  }))
)
