import { APISingleTVResult } from "../../types/API"
import Hero from "./Hero"

function TvShowcase({ data }: SingleShowCaseProps) {
  console.log(data)
  return (
    <>
      <div className="section-separator">
        <Hero item={data} />
      </div>
    </>
  )
}

export type SingleShowCaseProps = {
  data: APISingleTVResult
}

export default TvShowcase
