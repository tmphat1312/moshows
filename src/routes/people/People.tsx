import { NavBarPlaceholder } from "../../layout/NavBar"
import TitleSection from "../../layout/TitleSection"
import PeopleView from "./PeopleView"

function People() {
  return (
    <>
      <NavBarPlaceholder />
      <div className="section-separator">
        <TitleSection title="Popular people" />
        <div className="app-width">
          <PeopleView />
        </div>
      </div>
    </>
  )
}

export default People
