import { AiFillFacebook, AiFillGithub, AiTwotoneMail } from "react-icons/ai"

export const navigationLinks = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "movies",
    path: "/showcase/movie",
  },
  {
    name: "TV shows",
    path: "/showcase/tv",
  },
  {
    name: "people",
    path: "/people",
  },
]

export const contactInfo = [
  {
    text: "tmphat1312",
    icon: <AiFillFacebook />,
    link: "https://www.facebook.com/tmphat1312",
  },
  {
    text: "tmphat1312@gmail.com",
    icon: <AiTwotoneMail />,
    link: "mailto: tmphat1312@gmail.com",
  },
  {
    text: "tmphat1312",
    icon: <AiFillGithub />,
    link: "https://github.com/tmphat1312",
  },
] as const

export const inspiredBy = [
  {
    text: "The movie database",
    link: "https://www.themoviedb.org/",
  },
  {
    text: "TMDB API",
    link: "https://developer.themoviedb.org/reference/intro/getting-started",
  },
  {
    text: "Movix",
    link: "https://movix-eta.vercel.app/",
  },
] as const

export const trailerTypes = ["In Theaters", "On TV"]

export const titleMap: Record<string, string> = {
  movie: "Movies",
  tv: "TV Shows",
  person: "People",
}

export const movieTabs = new Map([
  ["all", "discover/movie"],
  ["popular", "movie/popular"],
  ["top rated", "movie/top_rated"],
  ["upcoming", "movie/upcoming"],
  ["now playing", "movie/now_playing"],
])

export const tvTabs = new Map([
  ["all", "discover/tv"],
  ["popular", "tv/popular"],
  ["top rated", "tv/top_rated"],
  ["airing today", "tv/airing_today"],
  ["on the air", "tv/on_the_air"],
])

export const tabQueryMaps = {
  movie: movieTabs,
  tv: tvTabs,
}

export const sortQueries = new Map([
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
