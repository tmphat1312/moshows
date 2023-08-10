import { useState } from "react"
import BackgroundWall from "../../components/BackgroundWall"
import CommonErrorMessage from "../../components/CommonErrorMessage"
import NoItemsMessage from "../../components/NoItemsMessage"
import Pagination from "../../components/Pagination"
import PersonCard, { PersonCardSkeleton } from "../../components/PersonCard"
import { useFetch } from "../../hooks/useFetch"
import GridView from "../../layout/GridView"
import { APIPersonResult, APIResponse } from "../../types/API"

export default function PeopleView() {
  const [page, setPage] = useState(1)
  const { data, status } = useFetch<FetchType>(`/person/popular?page=${page}`)

  let htmlContent = null
  if (status == "pending") {
    htmlContent = (
      <GridView>
        {[...Array(20)].map((_, index) => (
          <PersonCardSkeleton key={index} />
        ))}
      </GridView>
    )
  } else if (status == "rejected" || data == null) {
    htmlContent = <CommonErrorMessage />
  } else {
    const people = data?.results ?? []
    htmlContent = (
      <GridView>
        {people.length > 0 ? (
          people.map((person) => <PersonCard key={person.id} person={person} />)
        ) : (
          <NoItemsMessage />
        )}
      </GridView>
    )
  }

  return (
    <BackgroundWall>
      {htmlContent}
      <div className="flex justify-center">
        <Pagination
          onPageChange={setPage}
          totalItems={data?.total_results ?? 1}
        />
      </div>
    </BackgroundWall>
  )
}

type FetchType = APIResponse<APIPersonResult>
