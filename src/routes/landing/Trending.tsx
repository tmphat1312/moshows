import { useState } from "react"
import CommonErrorMessage from "../../components/CommonErrorMessage"
import CustomScrollingCarousel from "../../components/CustomScrollingCarousel"
import ItemCard, { ItemCardSkeleton } from "../../components/ItemCard"
import TabSwitcher from "../../components/TabSwitcher"
import { useFetch } from "../../hooks/useFetch"
import { APIResponse, APIResults } from "../../types/API"

const timeWindows = ["day", "week"]
export type TimeWindow = (typeof timeWindows)[number]

function Trending() {
  const [timeWindow, setTimeWindow] = useState<TimeWindow>("day")
  const { data, status, error } = useFetch<APIResponse<APIResults>>(
    `/trending/all/${timeWindow}`
  )

  function toggleTimeWindow(tab: string) {
    if (tab == timeWindow) return
    setTimeWindow(tab)
  }

  if (error) {
    return (
      <section className="section">
        <div className="flex-btw">
          <h2 className="title">Trending</h2>
          <TabSwitcher tabs={timeWindows} action={toggleTimeWindow} />
        </div>
        <CommonErrorMessage />
      </section>
    )
  }

  const carouselContent =
    status == "pending" ? (
      <>
        <ItemCardSkeleton />
        <ItemCardSkeleton />
        <ItemCardSkeleton />
        <ItemCardSkeleton />
        <ItemCardSkeleton />
        <ItemCardSkeleton />
        <ItemCardSkeleton />
      </>
    ) : (
      <>
        {data?.results.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </>
    )

  return (
    <section className="section">
      <div className="flex-btw">
        <h2 className="title">Trending</h2>
        <TabSwitcher tabs={timeWindows} action={toggleTimeWindow} />
      </div>
      <CustomScrollingCarousel>{carouselContent}</CustomScrollingCarousel>
    </section>
  )
}

export default Trending
