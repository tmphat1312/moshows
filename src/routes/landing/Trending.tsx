import { useState } from "react"
import CommonErrorMessage from "../../components/CommonErrorMessage"
import CustomScrollingCarousel from "../../components/CustomScrollingCarousel"
import ItemCard, { ItemCardSkeleton } from "../../components/ItemCard"
import NoItemsMessage from "../../components/NoItemsMessage"
import TabSwitcher from "../../components/TabSwitcher"
import { useFetch } from "../../hooks/useFetch"
import { APIResponse, APIResult } from "../../types/API"

export default function Trending() {
  const [timeWindow, setTimeWindow] = useState<TimeWindow>("day")
  const { data, status } = useFetch<FetchType>(`/trending/all/${timeWindow}`)

  function toggleTimeWindow(tab: string) {
    if (tab != timeWindow) setTimeWindow(tab)
  }

  if (status == "pending") {
    return (
      <CommonLayout tabAction={toggleTimeWindow}>
        <CustomScrollingCarousel>
          {[...Array(10)].map((_, index) => (
            <ItemCardSkeleton key={index} />
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

  const trending = data?.results ?? []
  return (
    <CommonLayout tabAction={toggleTimeWindow}>
      {trending.length > 0 ? (
        <CustomScrollingCarousel>
          {trending.map((item) => (
            <ItemCard key={item.id} item={item} type={item.media_type} />
          ))}
        </CustomScrollingCarousel>
      ) : (
        <NoItemsMessage />
      )}
    </CommonLayout>
  )
}

// #private
const timeWindows = ["day", "week"]
type FetchType = APIResponse<APIResult>
type TimeWindow = (typeof timeWindows)[number]

function CommonLayout({
  children,
  tabAction,
}: {
  children: React.ReactNode
  tabAction: (tab: string) => void
}) {
  return (
    <section className="section">
      <div className="flex-btw">
        <h2 className="title">Trending</h2>
        <TabSwitcher tabs={timeWindows} action={tabAction} />
      </div>
      {children}
    </section>
  )
}
// #private
