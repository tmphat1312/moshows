import { useEffect, useRef } from "react"
import { FaSearch } from "react-icons/fa"

function SearchForm() {
  const ref = useRef<HTMLInputElement>(null)

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

  return (
    <form className="flex items-center px-4 transition-all bg-slate-600 rounded-3xl focus-within:ring-2 focus-within:ring-primary-400 group">
      <span className="group-focus-within:text-primary-400">
        <FaSearch />
      </span>
      <input
        type="text"
        name="search"
        id="search"
        className="w-full py-1 bg-transparent border-0 border-r-2 border-gray-200 focus:ring-0 focus:border-primary-400 placeholder-slate-400"
        placeholder="Type / to search"
        ref={ref}
        autoComplete="off"
      />
      <label htmlFor="search" hidden>
        search
      </label>
      <button type="submit" className="px-4">
        Search
      </button>
    </form>
  )
}

export default SearchForm
