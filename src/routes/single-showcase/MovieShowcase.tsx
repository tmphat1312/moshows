import { toCurrencyFormat } from "../../services/helpers"
import { APISingleMovieResult } from "../../types/API"
import Hero from "./Hero"
import MinorInfo from "./MinorInfo"
import Recommendation from "./Recommendation"
import Similar from "./Similar"
import Videos from "./Videos"

function MovieShowcase({ data }: SingleShowCaseProps) {
  const contentTable = {
    status: data.status,
    budget: toCurrencyFormat(data.budget),
    revenue: toCurrencyFormat(data.revenue),
  }

  return (
    <>
      <div className="section-separator">
        <Hero item={data} />
      </div>
      <div className="flex-col-reverse gap-8 md:flex-row flex-btw section">
        <div className="space-y-8 md:w-4/5">
          <Videos />
          <Similar />
          <Recommendation />
        </div>
        <div className="grow">
          <MinorInfo contentTable={contentTable} />
        </div>
      </div>
    </>
  )
}

export type SingleShowCaseProps = {
  data: APISingleMovieResult
}

export default MovieShowcase
