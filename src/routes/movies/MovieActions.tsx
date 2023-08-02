import { useMovieStore } from "../../stores/movieStore"
import MovieFilters from "./MovieFilters"
import MovieSort from "./MovieSort"

function MovieActions() {
  const movieTypeQuery = useMovieStore((state) => state.movieTypeQuery)

  return (
    <div className="sticky max-w-sm mx-auto space-y-2 top-20">
      {movieTypeQuery == "discover/movie" && <MovieSort />}
      <MovieFilters />
    </div>
  )
}

export default MovieActions
