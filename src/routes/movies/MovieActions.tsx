import MovieFilters from "./MovieFilters"
import MovieSort from "./MovieSort"

function MovieActions() {
  return (
    <div className="sticky max-w-sm mx-auto space-y-2 top-20">
      <MovieSort />
      <MovieFilters />
    </div>
  )
}

export default MovieActions
