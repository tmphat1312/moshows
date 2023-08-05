import { APISingleTVResult } from "../../types/API"

function TvShowcase({ data }: SingleShowCaseProps) {
  console.log(data)
  return <div>TvShowcase</div>
}

export type SingleShowCaseProps = {
  data: APISingleTVResult
}

export default TvShowcase
