export type APIResponse = {
  page: number
  results: APIResults[]
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
