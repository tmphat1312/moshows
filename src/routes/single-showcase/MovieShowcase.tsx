import { APISingleMovieResult } from "../../types/API"
import Hero from "./Hero"
import MovieMinorInfo from "./MovieMinorInfo"
import Recommendation from "./Recommendation"
import Similar from "./Similar"
import Videos from "./Videos"

function MovieShowcase({ data }: SingleShowCaseProps) {
  return (
    <>
      <div className="section-separator">
        <Hero item={data} />
      </div>
      <div className="gap-8 flex-btw section">
        <div className="w-4/5 space-y-8">
          <Videos />
          <Similar />
          <Recommendation />
        </div>
        <div className="grow">
          <MovieMinorInfo item={data} />
        </div>
      </div>
    </>
  )
}

export type SingleShowCaseProps = {
  data: APISingleMovieResult
}

export default MovieShowcase
