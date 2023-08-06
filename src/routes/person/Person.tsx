import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import { APISinglePersonResult } from "../../types/API"
import Credits from "./Credits"
import Details from "./Details"
import Info from "./Info"
import ProfilePhoto from "./ProfilePhoto"

function Person() {
  const { id } = useParams<{ id: string }>()
  const { data, status, error } = useFetch<APISinglePersonResult>(
    `/person/${id}`
  )

  if (status === "rejected") {
    return <div>There was an error: {error?.message}</div>
  }

  if (status === "pending") {
    return <div>Loading...</div>
  }

  if (data == null) {
    return <div>Person not found</div>
  }

  return (
    <section className="space-y-16 section">
      <div className="flex items-center gap-8">
        <div className="w-1/4 shrink-0">
          <ProfilePhoto profilePath={data.profile_path} />
        </div>
        <div className="grow">
          <Info item={data} />
        </div>
      </div>
      <div className="flex gap-8">
        <div className="w-1/4">
          <Details item={data} />
        </div>
        <div className="w-3/4">
          <Credits />
        </div>
      </div>
    </section>
  )
}

export default Person
