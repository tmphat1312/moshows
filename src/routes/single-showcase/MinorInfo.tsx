import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import { APIKeywordResults, APISingleMovieResult } from "../../types/API"

function MinorInfo({ item }: MinorInfoProps) {
  const { type, id } = useParams<{ type: string; id: string }>()
  const keywordsResponse = useFetch<{
    id: number
    keywords: APIKeywordResults[]
  }>(`${type}/${id}/keywords`)

  const keywordsContent = keywordsResponse.error ? (
    <p>error loading keywords</p>
  ) : keywordsResponse.status === "pending" ? (
    <p>loading keywords...</p>
  ) : (
    <ul className="flex flex-wrap gap-2">
      {keywordsResponse.data?.keywords.map((keyword) => (
        <li
          key={keyword.id}
          className="px-1 rounded-md bg-slate-300 text-slate-900 text-balance drop-shadow-md"
        >
          {keyword.name}
        </li>
      ))}
    </ul>
  )

  return (
    <div className="space-y-2">
      <section>
        <h6>Status</h6>
        <p>{item.status}</p>
      </section>
      <hr />
      <section>
        <h6>Keywords</h6>
        {keywordsContent}
      </section>
      <hr />
      <section>
        <h6>Budget</h6>
        <p>{item.budget}</p>
      </section>
      <hr />
      <section>
        <h6>Revenue</h6>
        <p>{item.budget}</p>
      </section>
    </div>
  )
} // TODO: covert budget and revenue to currency format

export type MinorInfoProps = {
  item: APISingleMovieResult
}

export default MinorInfo
