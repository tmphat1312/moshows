import { useEffect, useRef, useState } from "react"
import { FaSearch } from "react-icons/fa"
import { titleMap } from "../constants"
import { useLocation, useNavigate } from "react-router-dom"
import { useSearchStore } from "../stores/searchStore"

const searchOptions = Object.entries(titleMap).map(([key, value]) => ({
  text: value,
  value: key,
}))

function SearchForm() {
  const setSearchData = useSearchStore((state) => state.setSearchData)
  const searchQuery = useSearchStore((state) => state.searchQuery)
  const [type, setType] = useState(searchOptions[0].value)
  const ref = useRef<HTMLInputElement>(null)
  const [search, setSearch] = useState(searchQuery)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/") {
        e.preventDefault()
        ref.current?.focus()
      } else if (e.key === "Escape") {
        ref.current?.blur()
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (search.length > 0) {
      setSearchData({ type, query: search })
      location.pathname != "/search" && navigate(`/search`)
    }
  }

  return (
    <form
      className="flex items-center px-4 transition-all bg-slate-600 rounded-3xl focus-within:ring-2 focus-within:ring-primary-400 group"
      onSubmit={handleSubmit}
    >
      <span className="group-focus-within:text-primary-400">
        <FaSearch />
      </span>
      <input
        type="text"
        name="search"
        id="search"
        className="w-full py-1 bg-transparent border-0 focus:ring-0 focus:border-primary-400 placeholder-slate-400"
        placeholder="Type / to search"
        ref={ref}
        autoComplete="off"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
        className="border-0 md:text-sm bg-slate-700"
        name="type"
        id="type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        {searchOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      <button type="submit" className="px-4">
        Search
      </button>
    </form>
  )
}

export default SearchForm
