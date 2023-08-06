import { useState } from "react"
import BackgroundWall from "../../components/BackgroundWall"
import CommonErrorMessage from "../../components/CommonErrorMessage"
import Pagination from "../../components/Pagination"
import PersonCard, { PersonCardSkeleton } from "../../components/PersonCard"
import { useFetch } from "../../hooks/useFetch"
import { APIPersonResults, APIResponse } from "../../types/API"

function PeopleView() {
  const [page, setPage] = useState(1)
  const { data, error, status } = useFetch<APIResponse<APIPersonResults>>(
    `/person/popular?page=${page}`
  )

  if (error) {
    return (
      <BackgroundWall>
        <CommonErrorMessage />
      </BackgroundWall>
    )
  }

  const people = data?.results
  const items =
    status == "pending" || !data ? (
      <>
        {Array.from({ length: 20 }).map((_, index) => (
          <PersonCardSkeleton key={index} />
        ))}
      </>
    ) : (
      <>
        {people != null && people.length > 0 ? (
          people.map((person) => <PersonCard key={person.id} person={person} />)
        ) : (
          <p className="text-2xl font-display text-gradient-primary">
            No items found
          </p>
        )}
      </>
    )

  return (
    <BackgroundWall>
      <div className="flex flex-wrap justify-center gap-4 mb-4 md:gap-6">
        {items}
      </div>
      <div className="flex justify-center">
        <Pagination
          onPageChange={setPage}
          totalItems={data?.total_results ?? 1}
        />
      </div>
    </BackgroundWall>
  )
}

export default PeopleView
