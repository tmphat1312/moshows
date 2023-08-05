import { APISingleMovieResult } from "../../types/API"
import Credits from "./Credits"
import Info from "./Info"
import Poster from "./Poster"

const BASE_URL = import.meta.env.VITE_TMDB_HERO_BASE_URL

function Hero({ item }: HeroProps) {
  return (
    <div
      className="bg-slate-900"
      style={{
        backgroundImage: `url(${BASE_URL}${item.backdrop_path})`,
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
          <div>
            <Info item={item} />
          </div>
        </section>
        <Credits />
      </div>
    </div>
  )
}

export type HeroProps = {
  item: APISingleMovieResult
}

export default Hero
