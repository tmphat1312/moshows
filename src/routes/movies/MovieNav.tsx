import CustomSelect from "../../components/CustomSelect"
import TabSwitcher from "../../components/TabSwitcher"
import { queriesMap, useMovieStore } from "../../stores/movieStore"

const movieNavSelects = Array.from(queriesMap.entries(), ([key]) => ({
  text: key,
  value: key,
}))
const movieNavTabs = Array.from(queriesMap.keys())

function MovieNav() {
  const setQuery = useMovieStore((state) => state.setQuery)

  return (
    <nav className="app-width">
      <div className="justify-center hidden sm:flex">
        <TabSwitcher tabs={movieNavTabs} action={(tab) => setQuery(tab)} />
      </div>
      <CustomSelect items={movieNavSelects} action={setQuery} />
    </nav>
  )
}

export default MovieNav
