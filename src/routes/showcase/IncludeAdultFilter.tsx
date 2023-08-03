function IncludeAdultFilter() {
  return (
    <label className="space-x-1 capitalize">
      <span className="px-1 font-medium">adult content </span>
      <input
        type="checkbox"
        name="adult"
        id="adult"
        className="border-0 rounded-sm drop-shadow-md"
      />
    </label>
  )
}

export default IncludeAdultFilter
