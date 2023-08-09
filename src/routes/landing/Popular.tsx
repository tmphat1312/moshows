import { useState } from "react"
import CommonErrorMessage from "../../components/CommonErrorMessage"
import CustomScrollingCarousel from "../../components/CustomScrollingCarousel"
import ItemCard, { ItemCardSkeleton } from "../../components/ItemCard"
import NoItemsMessage from "../../components/NoItemsMessage"
import TabSwitcher from "../../components/TabSwitcher"
import { trailerTypes } from "../../constants"
import { useFetch } from "../../hooks/useFetch"
import { TrailerType, getMediaType } from "../../services/constantMap"
import { APIResponse, APIResult } from "../../types/API"

function Popular() {
  const [trailerType, setTrailerType] = useState<TrailerType>("In Theaters")
  const mediaType = getMediaType(trailerType)
  const { data, status } = useFetch<FetchType>(`${mediaType}/popular`)

  function toggleTrailerType(tab: string) {
    if (tab != trailerType) setTrailerType(tab)
  }

  if (status == "pending") {
    return (
      <CommonLayout tabAction={toggleTrailerType}>
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
      <CommonLayout tabAction={toggleTrailerType}>
        <CommonErrorMessage />
      </CommonLayout>
    )
  }

  const popular = data?.results ?? []
  return (
    <CommonLayout tabAction={toggleTrailerType}>
      {popular.length > 0 ? (
        <CustomScrollingCarousel>
          <div className="invisible w-0 -ml-6">
            <ItemCardSkeleton />
          </div>
          {data?.results.map((item) => (
            <ItemCard key={item.id} item={item} type={mediaType} />
          ))}
        </CustomScrollingCarousel>
      ) : (
        <NoItemsMessage />
      )}
    </CommonLayout>
  )
}

type FetchType = APIResponse<APIResult>

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
        <h2 className="title">Popular</h2>
        <TabSwitcher tabs={trailerTypes} action={tabAction} />
      </div>
      {children}
    </section>
  )
}

export default Popular
