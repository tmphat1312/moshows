import BackgroundWall from "../../components/BackgroundWall"
import CommonErrorMessage from "../../components/CommonErrorMessage"
import CustomScrollingCarousel from "../../components/CustomScrollingCarousel"
import PersonCard, { PersonCardSkeleton } from "../../components/PersonCard"
import { useFetch } from "../../hooks/useFetch"
import { APIPersonResults, APIResponse } from "../../types/API"

function Popular() {
  const { data, status, error } =
    useFetch<APIResponse<APIPersonResults>>(`person/popular`)

  if (error) {
    return (
      <section className="section">
        <div className="flex-btw">
          <h2 className="title">Popular people</h2>
        </div>
        <CommonErrorMessage />
      </section>
    )
  }

  const carouselContent =
    status == "pending" ? (
      <CustomScrollingCarousel>
        <PersonCardSkeleton />
        <PersonCardSkeleton />
        <PersonCardSkeleton />
        <PersonCardSkeleton />
        <PersonCardSkeleton />
        <PersonCardSkeleton />
        <PersonCardSkeleton />
      </CustomScrollingCarousel>
    ) : (
      <CustomScrollingCarousel>
        {data?.results.map((person) => {
          return <PersonCard key={person.id} person={person} />
        })}
      </CustomScrollingCarousel>
    )

  return (
    <section className="section">
      <BackgroundWall>
        <h2 className="title">Popular people</h2>
        {carouselContent}
      </BackgroundWall>
    </section>
  )
}

export default Popular
