import CustomSelect from "../../components/CustomSelect"
import TabSwitcher from "../../components/TabSwitcher"
import { queriesMap, useTvStore } from "../../stores/tvStore"

const tvNavSelects = Array.from(queriesMap.entries(), ([key, value]) => ({
  text: key,
  value,
}))
const tvNavTabs = Array.from(queriesMap.keys())

function TvNav() {
  const setQuery = useTvStore((state) => state.setQuery)

  return (
    <nav className="app-width">
      <div className="justify-center hidden sm:flex">
        <TabSwitcher
          tabs={tvNavTabs}
          action={(tab) => {
            const mapped = queriesMap.get(tab)
            if (mapped) setQuery(mapped)
          }}
        />
      </div>
      <div className="max-w-sm mx-auto sm:hidden">
        <CustomSelect items={tvNavSelects} action={setQuery} />
      </div>
    </nav>
  )
}

export default TvNav
