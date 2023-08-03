import Collapse from "../../components/Collapse"
import { useTvStore } from "../../stores/tvStore"
import GenreFilter from "./GenreFilter"
import KeywordFilter from "./KeywordFilter"
import LanguageFilter from "./LanguageFilter"
import VoteAvgFilter from "./VoteAvgFilter"

function MovieFilters() {
  const getMovies = useTvStore((state) => state.getTvs)
  const resetFilter = useTvStore((state) => state.resetFilter)

  return (
    <Collapse title="Filters">
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <KeywordFilter />
        <LanguageFilter />
        <VoteAvgFilter />
        <GenreFilter />
        <div className="flex flex-col gap-2">
          <button
            type="submit"
            className="btn btn--primary"
            onClick={getMovies}
          >
            Filter
          </button>
          <button type="reset" className="btn" onClick={resetFilter}>
            Reset
          </button>
        </div>
      </form>
    </Collapse>
  )
}

export default MovieFilters