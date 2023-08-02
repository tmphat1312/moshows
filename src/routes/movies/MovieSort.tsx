import Collapse from "../../components/Collapse"
import CustomSelect from "../../components/CustomSelect"
import { sortsMap, useMovieStore } from "../../stores/movieStore"

const movieSortSelects = Array.from(sortsMap.entries(), ([key, value]) => ({
  text: key,
  value,
}))

function MovieSort() {
  const setSort = useMovieStore((state) => state.setSort)

  return (
    <Collapse title="Sort">
      <CustomSelect items={movieSortSelects} action={setSort} />
    </Collapse>
  )
}

export default MovieSort
