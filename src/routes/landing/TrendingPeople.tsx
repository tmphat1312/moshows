import { useState } from "react"
import BackgroundWall from "../../components/BackgroundWall"
import CommonErrorMessage from "../../components/CommonErrorMessage"
import CustomScrollingCarousel from "../../components/CustomScrollingCarousel"
import NoItemsMessage from "../../components/NoItemsMessage"
import PersonCard, { PersonCardSkeleton } from "../../components/PersonCard"
import TabSwitcher from "../../components/TabSwitcher"
import { useFetch } from "../../hooks/useFetch"
import { APIPersonResult, APIResponse } from "../../types/API"

export default function TrendingPeople() {
  const [timeWindow, setTimeWindow] = useState<TimeWindow>("day")
  const { data, status } = useFetch<FetchType>(`/trending/person/${timeWindow}`)

  function toggleTimeWindow(tab: string) {
    if (tab != timeWindow) setTimeWindow(tab)
  }

  if (status == "pending") {
    return (
      <CommonLayout tabAction={toggleTimeWindow}>
        <CustomScrollingCarousel>
          {[...Array(10)].map((_, index) => (
            <PersonCardSkeleton key={index} />
          ))}
        </CustomScrollingCarousel>
      </CommonLayout>
    )
  }

  if (status == "rejected" || data == null) {
    return (
      <CommonLayout tabAction={toggleTimeWindow}>
        <CommonErrorMessage />
      </CommonLayout>
    )
  }

  const trendingPeople = data?.results ?? []
  return (
    <CommonLayout tabAction={toggleTimeWindow}>
      {trendingPeople.length > 0 ? (
        <CustomScrollingCarousel>
          {trendingPeople.map((person) => {
            return <PersonCard key={person.id} person={person} />
          })}
        </CustomScrollingCarousel>
      ) : (
        <NoItemsMessage />
      )}
    </CommonLayout>
  )
}

const timeWindows = ["day", "week"]
type TimeWindow = (typeof timeWindows)[number]
type FetchType = APIResponse<APIPersonResult>

function CommonLayout({
  children,
  tabAction,
}: {
  children: React.ReactNode
  tabAction: (tab: string) => void
}) {
  return (
    <section className="section">
      <BackgroundWall>
        <div className="items-center flex-btw">
          <h2 className="title">
            Trending <span className="hidden sm:inline-block">people</span>
          </h2>
          <TabSwitcher tabs={timeWindows} action={tabAction} />
        </div>
        {children}
      </BackgroundWall>
    </section>
  )
}
