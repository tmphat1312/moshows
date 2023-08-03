import Filter from "./Filter"
import Sort from "./Sort"

function Actions() {
  return (
    <div className="sticky max-w-sm mx-auto space-y-2 top-20">
      <Sort />
      <Filter />
    </div>
  )
}

export default Actions
