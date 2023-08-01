import NavBar from "../../layout/NavBar"
import TitleSection from "../../layout/TitleSection"
import MovieActions from "./MovieActions"
import MovieGridView from "./MovieGridView"
import MovieNav from "./MovieNav"

function Movies() {
  return (
    <>
      <div className="invisible">
        <NavBar />
      </div>
      <div className="section-separator">
        <TitleSection title="Movies" />
        <MovieNav />
        <div className="flex gap-8 app-width section">
          <div className="basis-1/5 shrink-0">
            <MovieActions />
          </div>
          <div className="grow">
            <MovieGridView />
          </div>
        </div>
      </div>
    </>
  )
}

export default Movies
