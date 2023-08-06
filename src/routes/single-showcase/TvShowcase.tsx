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
      <div className="gap-8 flex-btw section">
        <div className="w-4/5 space-y-8">
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
