import { BsDot } from "react-icons/bs"
import PlayButton from "../../components/PlayButton"
import { toHoursAndMinutes } from "../../services/helpers"
import { APISingleMovieResult } from "../../types/API"

function MovieInfo({ item }: InfoProps) {
  const genres = item.genres.map((genre) => genre.name).join(", ")

  return (
    <section className="space-y-3 tracking-wide">
      <h2 className="text-3xl font-medium transition-colors hover:text-gradient-primary text-balance">
        <a href={item.homepage} rel="noreferrer noopener" target="_blank">
          {item.title}{" "}
          <span className="font-sans">
            ({new Date(item.release_date).getFullYear()})
          </span>
        </a>
      </h2>
      <p className="text-lg italic text-primary-300">{item.tagline}</p>
      <div className="flex items-center gap-1 text-lg">
        <span>{item.release_date}</span>
        <BsDot />
        <span>{toHoursAndMinutes(item.runtime)}</span>
      </div>
      <div className="flex items-center gap-8">
        <h6 className="text-xl">Play trailer{" >>"}</h6>
        <div className="inline-flex p-1 ring-[2px] hover:ring-0 rounded-full ring-slate-50">
          <PlayButton />
        </div>
      </div>
      <div className="px-1 font-display bg-gradient-to-r from-red-700 to-red-800 w-max">
        {genres}
      </div>
      <div className="text-xl font-medium font-display">
        Rating:{" "}
        <span className="px-1 rounded-sm bg-primary-800">
          {item.vote_average.toFixed(1)}
        </span>
      </div>
      <section>
        <h5 className="text-xl">Overview:</h5>
        <p className="tracking-wider drop-shadow-md">{item.overview}</p>
      </section>
    </section>
  )
}

export type InfoProps = {
  item: APISingleMovieResult
}

export default MovieInfo
