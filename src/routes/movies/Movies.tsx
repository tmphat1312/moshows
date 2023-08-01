import NavBar from "../../layout/NavBar"
import TitleSection from "../../layout/TitleSection"

function Movies() {
  return (
    <>
      <div className="invisible">
        <NavBar />
      </div>
      <div className="section-separator">
        <TitleSection title="Movies" />
      </div>
      <div className="h-[2000px] section-separator"></div>
    </>
  )
}

export default Movies
