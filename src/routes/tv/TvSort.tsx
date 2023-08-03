import Collapse from "../../components/Collapse"
import CustomSelect from "../../components/CustomSelect"
import { sortsMap, useTvStore } from "../../stores/tvStore"

const tvSortSelects = Array.from(sortsMap.entries(), ([key, value]) => ({
  text: key,
  value,
}))

function TvSort() {
  const setSort = useTvStore((state) => state.setSort)

  return (
    <Collapse title="Sort">
      <CustomSelect items={tvSortSelects} action={setSort} />
    </Collapse>
  )
}

export default TvSort
