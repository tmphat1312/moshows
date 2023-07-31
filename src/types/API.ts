export type APIResponse<T> = {
  page: number
  results: T[]
  total_pages: number
  total_results: number
}

export type APIResponseMovie = {
  adult: boolean
  backdrop_path: string
  id: number
  title: string
  overview: string
  poster_path: string
  media_type: "movie"
  genre_ids: number[]
  popularity: number
  release_date: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type APIResponseTV = {
  adult: boolean
  backdrop_path: string
  id: number
  name: string
  overview: string
  poster_path: string
  media_type: "tv"
  genre_ids: number[]
  popularity: number
  release_date: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type APIResults = APIResponseMovie | APIResponseTV

export type APIPersonResults = {
  adult: boolean
  gender: 0 | 1 | 2
  id: number
  known_for: APIResults[]
  known_for_department: string
  name: string
  popularity: number
  profile_path: string
}

export type APIProviderResults = {
  display_priority: number
  logo_path: string
  provider_name: string
  provider_id: number
}
