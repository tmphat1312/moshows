import { useState } from "react"
import CustomScrollingCarousel from "../../components/CustomScrollingCarousel"
import ItemCard, {
  ItemCardProps,
  ItemCardSkeleton,
} from "../../components/ItemCard"
import { useFetch } from "../../hooks/useFetch"
import TabSwitcher from "../../components/TabSwitcher"

// TODO: extract API types to a separate file
export type TrendingAPIResponse = {
  page: number
  results: ItemCardProps[]
  total_pages: number
  total_results: number
}

const timeWindows = ["day", "week"]
export type TimeWindow = (typeof timeWindows)[number]

function Trending() {
  const [timeWindow, setTimeWindow] = useState<TimeWindow>("day")
  const { data, status, error } = useFetch<TrendingAPIResponse>(
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
