import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import { APIKeywordResults, APISingleTVResult } from "../../types/API"
import { SkeletonBox } from "../../components/Skeleton"

export default function TvMinorInfo({ item }: MinorInfoProps) {
  const { type, id } = useParams<{ type: string; id: string }>()
  const { data, status } = useFetch<FetchType>(`${type}/${id}/keywords`)

  if (status === "pending") {
    return (
      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="space-y-1">
            <SkeletonBox>
              <div className="h-4" />
            </SkeletonBox>
            <SkeletonBox>
              <div className="h-10" />
            </SkeletonBox>
          </div>
        ))}
      </div>
    )
  }

  if (status == "rejected" || data == null) {
    return <p className="error-message">Error loading additional resources</p>
  }

  const keywords = data?.keywords ?? data?.results ?? []
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

// #private
type MinorInfoProps = {
  item: APISingleTVResult
}

type FetchType = {
  id: number
  keywords?: APIKeywordResults[]
  results?: APIKeywordResults[]
}
// #private
