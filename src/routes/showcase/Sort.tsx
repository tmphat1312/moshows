import Collapse from "../../components/Collapse"
import CustomSelect from "../../components/CustomSelect"
import { sortQueries } from "../../constants"
import { useShowcaseStore } from "../../stores/showcaseStore"

const sortSelects = Array.from(sortQueries.entries(), ([key, value]) => ({
  text: key,
  value,
}))

function Sort() {
  const setSort = useShowcaseStore((state) => state.setSort)
  const type = useShowcaseStore((state) => state.type)

  return (
    <Collapse title="Sort">
      <CustomSelect key={type} items={sortSelects} action={setSort} />
    </Collapse>
  )
}

export default Sort
