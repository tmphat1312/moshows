import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import { APIKeywordResults, APISingleTVResult } from "../../types/API"

function TvMinorInfo({ item }: MinorInfoProps) {
  const { type, id } = useParams<{ type: string; id: string }>()
  const { data, error, status } = useFetch<{
    id: number
    keywords?: APIKeywordResults[]
    results?: APIKeywordResults[]
  }>(`${type}/${id}/keywords`)

  if (error) {
    return (
      <p className="px-1 bg-red-500 rounded-md w-max">
        Error loading resources
      </p>
    )
  }

  if (status === "pending") {
    return <p>loading keywords...</p>
  } // TODO: add loading skeleton

  const keywords = data?.keywords ?? data?.results ?? []
  const keywordsContent =
    keywords.length > 0 ? (
      <ul className="flex flex-wrap gap-2">
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
      <p>no keywords available</p>
    )

  const contentTable = {
    status: item.status,
    keywords: keywordsContent,
    type: item.type,
    "episode run time": item.episode_run_time
      ? `${item.episode_run_time} minutes`
      : "N/A",
  }
  return (
    <div className="space-y-2">
      {Object.entries(contentTable).map(([key, value]) => (
        <>
          <section key={key}>
            <h6 className="capitalize">{key}</h6>
            <p>{value}</p>
          </section>
          {key !== "revenue" && <hr />}
        </>
      ))}
    </div>
  )
}

export type MinorInfoProps = {
  item: APISingleTVResult
}

export default TvMinorInfo
