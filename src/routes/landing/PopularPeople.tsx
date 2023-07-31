import BackgroundWall from "../../components/BackgroundWall"
import CustomScrollingCarousel from "../../components/CustomScrollingCarousel"
import PersonCard, { PersonCardSkeleton } from "../../components/PersonCard"
import { useFetch } from "../../hooks/useFetch"
import { APIPersonResults, APIResponse } from "../../types/API"

function Popular() {
  const { data, status, error } =
    useFetch<APIResponse<APIPersonResults>>(`person/popular`)

  if (status == "pending") {
    return (
      <section className="section">
        <h2 className="title">Popular</h2>
        <CustomScrollingCarousel>
          <PersonCardSkeleton />
          <PersonCardSkeleton />
          <PersonCardSkeleton />
          <PersonCardSkeleton />
          <PersonCardSkeleton />
          <PersonCardSkeleton />
          <PersonCardSkeleton />
        </CustomScrollingCarousel>
      </section>
    )
  }

  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <section className="section">
      <BackgroundWall>
        <h2 className="title">Popular people</h2>
        <CustomScrollingCarousel>
          {data?.results.map((person) => {
            return <PersonCard key={person.id} person={person} />
          })}
        </CustomScrollingCarousel>
      </BackgroundWall>
    </section>
  )
}

export default Popular
