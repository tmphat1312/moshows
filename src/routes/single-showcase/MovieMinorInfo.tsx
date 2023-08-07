import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import { toCurrencyFormat } from "../../services/helpers"
import { APIKeywordResults, APISingleMovieResult } from "../../types/API"

function MovieMinorInfo({ item }: MinorInfoProps) {
  const { type, id } = useParams<{ type: string; id: string }>()
  const { data, status } = useFetch<{
    id: number
    keywords: APIKeywordResults[]
  }>(`${type}/${id}/keywords`)

  if (status === "pending") {
    return <p>loading keywords...</p>
  } // TODO: add loading skeleton

  if (status == "rejected" || data == null) {
    return (
      <p className="px-1 bg-red-500 rounded-md w-max">
        Error loading resources
      </p>
    )
  } // TODO: add error indicator

  const keywords = data?.keywords ?? []
  const keywordsContent =
    keywords.length > 0 ? (
      <ul className="flex flex-wrap gap-2 py-1">
        {keywords.map((keyword) => (
          <li
            key={keyword.id}
            className="px-1 rounded-md bg-slate-300 text-slate-900 drop-shadow-md"
          >
            {keyword.name}
          </li>
        ))}
      </ul>
    ) : (
      <p>no keywords available</p> // TODO: no keywords indicator
    )

  const contentTable = {
    status: item.status,
    keywords: keywordsContent,
    budget: toCurrencyFormat(item.budget),
    revenue: toCurrencyFormat(item.revenue),
  }
  return (
    <div className="space-y-2">
      {Object.entries(contentTable).map(([key, value]) => (
        <div key={key}>
          <section>
            <h6 className="capitalize">{key}</h6>
            {value}
          </section>
          {key !== "revenue" && <hr />}
        </div>
      ))}
    </div>
  )
}

export type MinorInfoProps = {
  item: APISingleMovieResult
}

export default MovieMinorInfo
