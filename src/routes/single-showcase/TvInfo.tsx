import ShowMore from "../../components/ShowMore"
import dayjs from "../../services/dayjs"
import { APISingleTVResult } from "../../types/API"
import VideoPlayerButton from "./VideoPlayerButton"

function TvInfo({ item }: InfoProps) {
  const genres = item.genres.map((genre) => genre.name).join(", ")

  return (
    <section className="space-y-3 tracking-wide">
      <h2 className="text-3xl font-medium text-balance">
        <a
          href={item.homepage}
          rel="noreferrer noopener"
          target="_blank"
          className="transition-colors hover:text-gradient-primary"
        >
          {item.name}{" "}
          <span className="font-sans">
            ({new Date(item.first_air_date).getFullYear()})
          </span>
        </a>
      </h2>
      <p className="text-lg italic text-primary-300">{item.tagline}</p>
      <div className="flex items-center gap-1 text-lg">
        <span>{dayjs(item.first_air_date).format("LL")}</span>
        <span>&rarr;</span>
        <span>{dayjs(item.last_air_date).format("LL")}</span>
      </div>
      <div className="space-x-2">
        <span className="inline-block px-1 rounded-sm skew-y-2 bg-primary-700">
          {item.number_of_episodes} episode{item.number_of_episodes > 1 && "s"}
        </span>
        <span className="inline-block px-1 rounded-sm -skew-y-2 bg-primary-800">
          {item.number_of_seasons} season{item.number_of_seasons > 1 && "s"}
        </span>
      </div>
      <VideoPlayerButton id={item.id.toString()} type="tv" />
      <div className="px-1 font-display bg-gradient-to-r from-primary-700 to-primary-800 w-max">
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
  item: APISingleTVResult
}

export default TvInfo
