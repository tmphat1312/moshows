import { BsDot } from "react-icons/bs"
import ShowMore from "../../components/ShowMore"
import { toHoursAndMinutes } from "../../services/helpers"
import { APISingleMovieResult } from "../../types/API"
import VideoPlayerButton from "./VideoPlayerButton"

function MovieInfo({ item }: InfoProps) {
  const genres = item.genres.map((genre) => genre.name).join(", ")

  return (
    <section className="space-y-3 tracking-wide">
      <h2 className="text-3xl text-balance">
        <a
          href={item.homepage}
          rel="noreferrer noopener"
          target="_blank"
          className="transition-colors hover:text-gradient-primary"
        >
          {item.title}{" "}
          <span className="font-sans">
            ({new Date(item.release_date).getFullYear()})
          </span>
        </a>
      </h2>
      <p className="text-lg italic text-primary-400/80">{item.tagline}</p>
      <div className="flex items-center text-lg">
        <span>{item.release_date}</span>
        <BsDot />
        <span>{toHoursAndMinutes(item.runtime)}</span>
      </div>
      <VideoPlayerButton id={item.id.toString()} type="movie" />
      <div className="px-1 font-display bg-gradient-to-r from-primary-700 to-primary-800 w-fit">
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
        <ShowMore text={item.overview} />
      </section>
    </section>
  )
}

export type InfoProps = {
  item: APISingleMovieResult
}

export default MovieInfo
