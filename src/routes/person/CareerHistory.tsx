import { APIResults } from "../../types/API"

function CareerHistory({ items }: CareerHistoryProps) {
  const sortedByDateItems = items.sort((a, b) => {
    const aDate = a.media_type === "movie" ? a.release_date : a.first_air_date
    const bDate = b.media_type === "movie" ? b.release_date : b.first_air_date

    if (aDate.length === 0) {
      return 1
    }

    if (bDate.length === 0) {
      return -1
    }

    return new Date(bDate).getTime() - new Date(aDate).getTime()
  })

  return (
    <ul className="py-4 space-y-1 overflow-auto max-h-96">
      {sortedByDateItems.map((item) => {
        const title = item.media_type === "movie" ? item.title : item.name
        const releaseDate =
          item.media_type === "movie" ? item.release_date : item.first_air_date
        const releaseYear =
          releaseDate.length > 0 ? releaseDate.split("-")[0] : "____"

        return (
          <li
            key={item.id}
            className="flex items-center gap-8 px-2 py-2 rounded-sm bg-slate-700 hover:bg-slate-600"
          >
            <span>{releaseYear}</span>
            <span>&oplus;</span>
            <div>
              <h6>
                {title} <span className="font-sans">({item.media_type})</span>
              </h6>
              <p className="italic capitalize">
                as{" "}
                <span className="text-primary-500 font-display">
                  {item.character.length > 0 ? item.character : "____"}
                </span>
              </p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export type CareerHistoryProps = {
  items: (APIResults & { character: string })[]
}
export default CareerHistory
