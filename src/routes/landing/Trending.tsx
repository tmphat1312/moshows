import { useState } from "react"
import CustomScrollingCarousel from "../../components/CustomScrollingCarousel"
import ItemCard, { ItemCardSkeleton } from "../../components/ItemCard"
import TabSwitcher from "../../components/TabSwitcher"
import { useFetch } from "../../hooks/useFetch"
import { APIResponse } from "../../types/API"

const timeWindows = ["day", "week"]
export type TimeWindow = (typeof timeWindows)[number]

function Trending() {
  const [timeWindow, setTimeWindow] = useState<TimeWindow>("day")
  const { data, status, error } = useFetch<APIResponse>(
    `/trending/all/${timeWindow}`
  )

  function toggleTimeWindow(tab: string) {
    if (tab == timeWindow) return
    setTimeWindow(tab)
  }

  if (status == "pending") {
    return (
      <section className="section">
        <div className="flex-btw">
          <h2 className="title">Trending</h2>
          <TabSwitcher tabs={timeWindows} action={toggleTimeWindow} />
        </div>
        <CustomScrollingCarousel>
          <ItemCardSkeleton />
          <ItemCardSkeleton />
          <ItemCardSkeleton />
          <ItemCardSkeleton />
          <ItemCardSkeleton />
          <ItemCardSkeleton />
          <ItemCardSkeleton />
        </CustomScrollingCarousel>
      </section>
    )
  }

  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <section className="section">
      <div className="flex-btw">
        <h2 className="title">Trending</h2>
        <TabSwitcher tabs={timeWindows} action={toggleTimeWindow} />
      </div>
      <CustomScrollingCarousel>
        {data?.results.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </CustomScrollingCarousel>
    </section>
  )
}

export default Trending
