import NavBar from "../../layout/NavBar"
import TitleSection from "../../layout/TitleSection"
import TvActions from "./TvActions"
import TvGridView from "./TvGridView"
import TvNav from "./TvNav"

function Tv() {
  return (
    <>
      <div className="invisible">
        <NavBar />
      </div>
      <div className="section-separator">
        <TitleSection title="TV Shows" />
        <TvNav />
        <div className="relative flex flex-col gap-8 lg:flex-row app-width section">
          <div className="basis-1/5 shrink-0">
            <TvActions />
          </div>
          <div className="grow">
            <TvGridView />
          </div>
        </div>
      </div>
    </>
  )
}

export default Tv
