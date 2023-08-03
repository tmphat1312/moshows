import CustomSelect from "../../components/CustomSelect"
import TabSwitcher from "../../components/TabSwitcher"
import { queriesMap, useMovieStore } from "../../stores/movieStore"

const navSelects = Array.from(queriesMap.entries(), ([key, value]) => ({
  text: key,
  value,
}))
const navTabs = Array.from(queriesMap.keys())

function Nav() {
  const setQuery = useMovieStore((state) => state.setQuery)

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
