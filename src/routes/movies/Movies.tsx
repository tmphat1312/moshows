import NavBar from "../../layout/NavBar"
import TitleSection from "../../layout/TitleSection"
import { useMovieStore } from "../../stores/movieStore"
import MovieActions from "./MovieActions"
import MovieGridView from "./MovieGridView"
import MovieNav from "./MovieNav"

function Movies() {
  const query = useMovieStore((state) => state.movieTypeQuery)

  return (
    <>
      <div className="invisible">
        <NavBar />
      </div>
      <div className="section-separator">
        <TitleSection title="Movies" />
        <MovieNav />
        <div className="relative flex gap-8 app-width section">
          {query == "discover/movie" && (
            <div className="basis-1/5 shrink-0">
              <MovieActions />
            </div>
          )}
          <div className="grow">
            <MovieGridView />
          </div>
        </div>
      </div>
    </>
  )
}

export default Movies
