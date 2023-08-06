import { useParams } from "react-router-dom"
import { APISingleMovieResult, APISingleTVResult } from "../../types/API"
import Credits from "./Credits"
import MovieInfo from "./MovieInfo"
import Poster from "./Poster"
import TvInfo from "./TvInfo"

const BASE_URL = import.meta.env.VITE_TMDB_HERO_BASE_URL

function Hero({ item }: HeroProps) {
  const { type } = useParams<{ type: string }>()

  const info =
    type === "tv" ? (
      <TvInfo item={item as APISingleTVResult} />
    ) : (
      <MovieInfo item={item as APISingleMovieResult} />
    )

  return (
    <div
      className="bg-slate-900"
      style={{
        backgroundImage: `url(${BASE_URL}${item?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="section">
        <section className="flex flex-col gap-8 py-8 sm:flex-row sm:items-center backdrop-blur-sm">
          <div className="shrink-0">
            <Poster adult={item.adult} posterPath={item.poster_path} />
          </div>
          <div>{info}</div>
        </section>
        <Credits />
      </div>
    </div>
  )
}

export type HeroProps = {
  item: APISingleMovieResult | APISingleTVResult
}

export default Hero
