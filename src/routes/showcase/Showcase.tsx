import { useParams } from "react-router-dom"
import { titleMap } from "../../constants"
import NavBar from "../../layout/NavBar"
import TitleSection from "../../layout/TitleSection"
import Actions from "./Actions"
import GridView from "./GridView"
import { useShowcaseStore } from "../../stores/showcaseStore"

function Showcase() {
  const { type } = useParams<ShowCaseParams>()
  const setType = useShowcaseStore((state) => state.setType)

  if (!type || !isShowcaseType(type)) {
    throw Error(`${type} is not a valid type of showcase`)
  }

  setType(type)

  return (
    <>
      <div className="invisible">
        <NavBar />
      </div>
      <div className="section-separator">
        <TitleSection title={titleMap[type]} />
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

export type ShowcaseType = "movie" | "tv"

export type ShowCaseParams = {
  type: ShowcaseType
}

function isShowcaseType(type: string): type is ShowcaseType {
  return type === "movie" || type === "tv"
}

export default Showcase
