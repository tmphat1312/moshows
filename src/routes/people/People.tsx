import TitleSection from "../../layout/TitleSection"
import PeopleView from "./PeopleView"

function People() {
  return (
    <>
      <div className="space-y-4 section">
        <TitleSection title="Popular people" />
        <PeopleView />
      </div>
    </>
  )
}

export default People
