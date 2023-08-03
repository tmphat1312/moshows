import CustomSelect from "../../components/CustomSelect"
import TabSwitcher from "../../components/TabSwitcher"
import { tabQueryMaps } from "../../constants"
import { useShowcaseStore } from "../../stores/showcaseStore"

function Nav() {
  const setQuery = useShowcaseStore((state) => state.setQuery)
  const type = useShowcaseStore((state) => state.type)

  const queriesMap = tabQueryMaps[type]
  const navTabs = Array.from(queriesMap.keys())
  const navSelects = Array.from(queriesMap.entries(), ([key, value]) => ({
    text: key,
    value,
  }))

  return (
    <nav className="app-width">
      <div className="justify-center hidden sm:flex">
        <TabSwitcher
          tabs={navTabs}
          action={(tab) => {
            const mapped = queriesMap.get(tab)
            if (mapped) setQuery(mapped)
          }}
        />
      </div>
      <div className="max-w-sm mx-auto sm:hidden">
        <CustomSelect items={navSelects} action={setQuery} />
      </div>
    </nav>
  )
}

export default Nav
