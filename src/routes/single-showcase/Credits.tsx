import { useParams } from "react-router-dom"
import CommonErrorMessage from "../../components/CommonErrorMessage"
import { SkeletonBox } from "../../components/Skeleton"
import { useFetch } from "../../hooks/useFetch"
import { APICreditResult } from "../../types/API"
import Cast, { CastSkeleton } from "./Cast"

function Credits() {
  const { type, id } = useParams<{ type: string; id: string }>()
  const { data, status } = useFetch<APICreditResult>(`${type}/${id}/credits`)

  if (status == "pending") {
    return (
      <div className="space-y-4">
        <SkeletonBox>
          <div className="h-16" />
        </SkeletonBox>
        <hr />
        <CastSkeleton />
      </div>
    )
  }

  if (status == "rejected" || data == null) {
    return <CommonErrorMessage />
  }

  const { cast, crew } = data
  const directors = crew.filter(
    (member) => member.known_for_department === "Directing"
  )
  const writers = crew.filter(
    (member) => member.known_for_department === "Writing"
  )
  const writersContent = writers.map((writer) => writer.name).join(", ")
  const directorsContent = directors.map((director) => director.name).join(", ")

  return (
    <div className="space-y-4">
      <div className="flex justify-center gap-8 my-2 capitalize">
        <div>
          <h5>directing: </h5>
          {directorsContent == "" ? "N/A" : directorsContent}
        </div>
        <div>
          <h5>writing: </h5>
          {writersContent == "" ? "N/A" : writersContent}
        </div>
      </div>
      <hr />
      <Cast cast={cast} />
    </div>
  )
}

export default Credits
