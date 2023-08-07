import { useState } from "react"
import BackgroundWall from "../../components/BackgroundWall"
import CommonErrorMessage from "../../components/CommonErrorMessage"
import Pagination from "../../components/Pagination"
import PersonCard, { PersonCardSkeleton } from "../../components/PersonCard"
import { useFetch } from "../../hooks/useFetch"
import { APIPersonResults, APIResponse } from "../../types/API"

export default function PeopleView() {
  const [page, setPage] = useState(1)
  const { data, status } = useFetch<FetchType>(`/person/popular?page=${page}`)

  if (status == "pending") {
    return (
      <CommonLayout>
        <div className="flex flex-wrap justify-center gap-4">
          {[...Array(20)].map((_, index) => (
            <PersonCardSkeleton key={index} />
          ))}
        </div>
      </CommonLayout>
    )
  }

  if (status == "rejected" || data == null) {
    return (
      <CommonLayout>
        <CommonErrorMessage />
      </CommonLayout>
    )
  }

  const people = data?.results ?? []
  return (
    <CommonLayout>
      <div className="flex flex-wrap justify-center gap-4 mb-4 md:gap-6">
        {people.length > 0 ? (
          people.map((person) => <PersonCard key={person.id} person={person} />)
        ) : (
          <p className="text-2xl font-display text-gradient-primary">
            No items found
          </p>
        )}
      </div>
      <div className="flex justify-center">
        <Pagination
          onPageChange={setPage}
          totalItems={data?.total_results ?? 1}
        />
      </div>
    </CommonLayout>
  )
}

// #private
type FetchType = APIResponse<APIPersonResults>

function CommonLayout({ children }: { children: React.ReactNode }) {
  return <BackgroundWall>{children}</BackgroundWall>
}
// #private
