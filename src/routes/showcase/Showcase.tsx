import { useParams } from "react-router-dom"
import { titleMap } from "../../constants"
import { NavBarPlaceholder } from "../../layout/NavBar"
import TitleSection from "../../layout/TitleSection"
import { ShowCaseParams, isShowcaseType } from "../../services/helpers"
import { useShowcaseStore } from "../../stores/showcaseStore"
import Actions from "./Actions"
import GridView from "./GridView"
import Nav from "./Nav"

function Showcase() {
  const { type } = useParams<ShowCaseParams>()
  const setType = useShowcaseStore((state) => state.setType)

  if (!isShowcaseType(type)) {
    throw Error(`${type} is not a valid type of showcase`)
  }

  setType(type)

  return (
    <>
      <NavBarPlaceholder />
      <div className="section-separator" key={type}>
        <TitleSection title={titleMap[type]} />
        <Nav />
        <div className="relative flex flex-col gap-8 lg:flex-row app-width section">
          <div className="basis-1/5 shrink-0">
            <Actions />
          </div>
          <div className="grow">
            <GridView />
          </div>
        </div>
      </div>
    </>
  )
}

export default Showcase
