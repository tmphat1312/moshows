import { APISingleTVResult } from "../../types/API"
import Hero from "./Hero"
import Recommendation from "./Recommendation"
import Similar from "./Similar"
import TvMinorInfo from "./TvMinorInfo"
import Videos from "./Videos"

function TvShowcase({ data }: SingleShowCaseProps) {
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
          <TvMinorInfo item={data} />
        </div>
      </div>
    </>
  )
}

export type SingleShowCaseProps = {
  data: APISingleTVResult
}

export default TvShowcase
