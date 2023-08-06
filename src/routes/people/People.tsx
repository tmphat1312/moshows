import TitleSection from "../../layout/TitleSection"
import PeopleView from "./PeopleView"

function People() {
  return (
    <>
      <div className="space-y-4 section">
        <TitleSection title="Popular people" />
        <div className="app-width">
          <PeopleView />
        </div>
      </div>
    </>
  )
}

export default People
