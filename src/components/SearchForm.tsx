import { useEffect, useRef } from "react"
import { FaSearch } from "react-icons/fa"
import { titleMap } from "../constants"
import { useNavigate } from "react-router-dom"

const searchOptions = Object.entries(titleMap).map(([key, value]) => ({
  text: value,
  value: key,
}))

function SearchForm({ action = "/" }: SearchFormProps) {
  const ref = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

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
    <form
      className="flex items-center px-4 transition-all bg-slate-600 rounded-3xl focus-within:ring-2 focus-within:ring-primary-400 group"
      action={action}
      onSubmit={(e) => {
        const form = e.target as HTMLFormElement
        console.dir(form["search"].value)
        const searchValue = form["search"].value
        const typeValue = form["type"].value

        e.preventDefault()
        navigate(action + `?search=${searchValue}&type=${typeValue}`)
      }}
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
      />
      <select
        className="border-0 md:text-sm bg-slate-700"
        name="type"
        id="type"
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

type SearchFormProps = {
  action?: string
}
export default SearchForm
