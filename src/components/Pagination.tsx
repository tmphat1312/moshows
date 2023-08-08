import { useState } from "react"
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai"

const PER_PAGE = 20 // 20 items per page, default value by TMDB API

function Pagination({
  totalItems,
  perPage = PER_PAGE,
  defaultPage = 1,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / perPage)
  const [currentPage, setCurrentPage] = useState(defaultPage)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    onPageChange(currentPage)
  }

  function handleNext() {
    const nextPage = currentPage + 1
    setCurrentPage(nextPage)
    onPageChange(nextPage)
  }

  function handlePrev() {
    const prevPage = currentPage - 1
    setCurrentPage(prevPage)
    onPageChange(prevPage)
  }

  return (
    <div className="inline-flex gap-2 text-sm sm:text-base md:text-lg">
      <button
        className="inline-flex items-center px-2 capitalize rounded-md drop-shadow-lg bg-slate-900 disabled:cursor-not-allowed disabled:bg-gray-500"
        onClick={handlePrev}
        disabled={currentPage == 1}
      >
        <AiOutlineDoubleLeft />
        prev
      </button>
      <form
        onSubmit={handleSubmit}
        className="overflow-hidden rounded-md bg-slate-500 drop-shadow-lg"
      >
        <label>
          <input
            type="number"
            name="page"
            id="page"
            className="bg-transparent border-0 max-w-[8ch] pr-0"
            min={1}
            max={totalPages}
            inputMode="numeric"
            value={currentPage}
            onChange={(e) => setCurrentPage(e.target.valueAsNumber)}
          />
          <span className="px-2">/{totalPages}</span>
        </label>
        <button type="submit" className="h-full px-2 bg-slate-600">
          Go
        </button>
      </form>
      <button
        className="inline-flex items-center px-2 capitalize rounded-md drop-shadow-lg bg-slate-900 disabled:cursor-not-allowed disabled:bg-gray-500"
        onClick={handleNext}
        disabled={currentPage == totalPages}
      >
        next
        <AiOutlineDoubleRight />
      </button>
    </div>
  )
}

export type PaginationProps = {
  totalItems: number
  perPage?: number
  defaultPage?: number
  onPageChange: (page: number) => void
}

export default Pagination
