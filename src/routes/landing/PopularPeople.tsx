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
      <>
        <PersonCardSkeleton />
        <PersonCardSkeleton />
        <PersonCardSkeleton />
        <PersonCardSkeleton />
        <PersonCardSkeleton />
        <PersonCardSkeleton />
        <PersonCardSkeleton />
      </>
    ) : (
      <>
        {data?.results.map((person) => {
          return <PersonCard key={person.id} person={person} />
        })}
      </>
    )

  return (
    <section className="section">
      <BackgroundWall>
        <h2 className="title">Popular people</h2>
        <CustomScrollingCarousel>{carouselContent}</CustomScrollingCarousel>
      </BackgroundWall>
    </section>
  )
}

export default Popular
