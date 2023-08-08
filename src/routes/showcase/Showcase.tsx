import { useParams } from "react-router-dom"
import { titleMap } from "../../constants"
import TitleSection from "../../layout/TitleSection"
import { isShowcaseType } from "../../services/helpers"
import { useShowcaseStore } from "../../stores/showcaseStore"
import Actions from "./Actions"
import GridView from "./GridView"
import Nav from "./Nav"

function Showcase() {
  const { type } = useParams<{ type: string }>()
  const setType = useShowcaseStore((state) => state.setType)

  if (!isShowcaseType(type)) {
    throw Error(`${type} is not a valid type of showcase`)
  }

  setType(type)

  return (
    <div key={type} className="space-y-12 section">
      <header>
        <TitleSection title={titleMap[type]} />
        <Nav />
      </header>
      <div className="relative flex flex-col gap-8 lg:flex-row">
        <div className="basis-1/5 shrink-0">
          <Actions />
        </div>
        <div className="grow">
          <GridView />
        </div>
      </div>
    </div>
  )
}

export default Showcase
