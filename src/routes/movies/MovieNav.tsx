import CustomSelect from "../../components/CustomSelect"
import TabSwitcher from "../../components/TabSwitcher"
import { queriesMap, useMovieStore } from "../../stores/movieStore"

const movieNavSelects = Array.from(queriesMap.entries(), ([key, value]) => ({
  text: key,
  value,
}))
const movieNavTabs = Array.from(queriesMap.keys())

function MovieNav() {
  const setQuery = useMovieStore((state) => state.setQuery)

  return (
    <nav className="app-width">
      <div className="justify-center hidden sm:flex">
        <TabSwitcher
          tabs={movieNavTabs}
          action={(tab) => {
            const mapped = queriesMap.get(tab)
            if (mapped) setQuery(mapped)
          }}
        />
      </div>
      <div className="sm:hidden">
        <CustomSelect items={movieNavSelects} action={setQuery} />
      </div>
    </nav>
  )
}

export default MovieNav
