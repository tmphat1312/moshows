import { useState } from "react"
import BackgroundWall from "../../components/BackgroundWall"
import CommonErrorMessage from "../../components/CommonErrorMessage"
import CustomScrollingCarousel from "../../components/CustomScrollingCarousel"
import PersonCard, { PersonCardSkeleton } from "../../components/PersonCard"
import TabSwitcher from "../../components/TabSwitcher"
import { useFetch } from "../../hooks/useFetch"
import { APIPersonResults, APIResponse } from "../../types/API"

const timeWindows = ["day", "week"]
export type TimeWindow = (typeof timeWindows)[number]

function TrendingPeople() {
  const [timeWindow, setTimeWindow] = useState<TimeWindow>("day")
  const { data, status, error } = useFetch<APIResponse<APIPersonResults>>(
    `/trending/person/${timeWindow}`
  )

  function toggleTimeWindow(tab: string) {
    if (tab == timeWindow) return
    setTimeWindow(tab)
  }

  if (error) {
    return (
      <section className="section">
        <div className="flex-btw">
          <h2 className="title">Trending People</h2>
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
        <div className="items-center flex-btw">
          <h2 className="title">Trending people</h2>
          <TabSwitcher tabs={timeWindows} action={toggleTimeWindow} />
        </div>
        {carouselContent}
      </BackgroundWall>
    </section>
  )
}

export default TrendingPeople
