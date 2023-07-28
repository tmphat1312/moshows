import { FaSearch } from "react-icons/fa"

function FloatSearchForm() {
  return (
    <form className="absolute top-[120%] inset-x-[4%] flex items-center bg-slate-600 px-4 rounded-lg gap-4 focus-within:ring-2 focus-within:ring-primary-400 group">
      <span className="transition-colors group-focus-within:text-primary-400">
        <FaSearch />
      </span>
      <input
        type="text"
        name="search"
        id="search"
        className="w-full transition-colors bg-transparent border-0 border-r-2 border-gray-300 focus:ring-0 focus:border-primary-400"
      />
      <label htmlFor="search" hidden>
        search
      </label>
      <button type="submit">Search</button>
    </form>
  )
}

export default FloatSearchForm
