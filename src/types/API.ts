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
  first_air_date: string
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

export type APIRegionResults = {
  iso_3166_1: string
  english_name: string
  native_name: string
}

export type APIKeywordResults = {
  id: number
  name: string
}

export type APILanguageResults = {
  iso_639_1: string
  english_name: string
  name: string
}

export type APIGenreResults = {
  id: number
  name: string
}

export type APISingleMovieResult = {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: null
  budget: number
  genres: APIGenreResults[]
  homepage: string
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  revenue: number
  runtime: number
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type APISingleTVResult = {
  adult: boolean
  backdrop_path: string
  episode_run_time: number[]
  first_air_date: string
  genres: APIGenreResults[]
  homepage: string
  id: number
  last_air_date: string
  last_episode_to_air: {
    id: number
    name: string
    overview: string
    vote_average: number
    vote_count: number
    air_date: string
    episode_number: number
    production_code: string
    runtime: number | null
    season_number: number
    show_id: number
    still_path: string | null
  }
  name: string
  next_episode_to_air: {
    id: number
    name: string
    overview: string
    vote_average: number
    vote_count: number
    air_date: string
    episode_number: number
    production_code: string
    runtime: number | null
    season_number: number
    show_id: number
    still_path: string | null
  }
  number_of_episodes: number
  number_of_seasons: number
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  seasons: {
    air_date: string
    episode_count: number
    id: number
    name: string
    overview: string
    poster_path: string | null
    season_number: number
    vote_average: number
  }[]
  status: string
  tagline: string
  type: string
  vote_average: number
  vote_count: number
}

export type APICreditResults = {
  id: number
  cast: Array<
    APIPersonResults & {
      character: string
      credit_id: string
      order: number
    }
  >
  crew: Array<
    APIPersonResults & {
      credit_id: string
      department: string
      job: string
    }
  >
}

export type APIVideoResult = {
  iso_639_1: string
  iso_3166_1: string
  name: string
  key: string
  site: string
  size: number
  type: string
  official: boolean
  published_at: string
  id: string
}

export type APISinglePersonResult = {
  adult: boolean
  also_known_as: string[]
  biography: string
  birthday: string
  deathday: string | null
  gender: 0 | 1 | 2 | 3
  homepage: string | null
  id: number
  known_for_department: string
  name: string
  place_of_birth: string | null
  popularity: number
  profile_path: string
}
