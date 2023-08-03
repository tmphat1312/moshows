import TvFilters from "./TvFilters"
import TvSort from "./TvSort"

function TvActions() {
  return (
    <div className="sticky max-w-sm mx-auto space-y-2 top-20">
      <TvSort />
      <TvFilters />
    </div>
  )
}

export default TvActions
