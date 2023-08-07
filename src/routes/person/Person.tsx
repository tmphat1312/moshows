import { useParams } from "react-router-dom"
import CommonErrorMessage from "../../components/CommonErrorMessage"
import { useFetch } from "../../hooks/useFetch"
import { NavBarPlaceholder } from "../../layout/NavBar"
import { APISinglePersonResult } from "../../types/API"
import Credits from "./Credits"
import Details from "./Details"
import Info from "./Info"
import ProfilePhoto from "./ProfilePhoto"

export default function Person() {
  const { id } = useParams<{ id: string }>()
  const { data, status } = useFetch<APISinglePersonResult>(`/person/${id}`)

  if (status === "pending") {
    return <div>Loading...</div>
  } // TODO: Add skeleton

  if (status == "rejected" || data == null) {
    return (
      <CommonLayout>
        <CommonErrorMessage />
      </CommonLayout>
    )
  }

  return (
    <CommonLayout>
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
    </CommonLayout>
  )
}

// #private
function CommonLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBarPlaceholder />
      <section className="space-y-16 section">{children}</section>
    </>
  )
}
// #private
