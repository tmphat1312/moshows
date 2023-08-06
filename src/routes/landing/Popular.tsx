import { useState } from "react"
import CommonErrorMessage from "../../components/CommonErrorMessage"
import CustomScrollingCarousel from "../../components/CustomScrollingCarousel"
import ItemCard, { ItemCardSkeleton } from "../../components/ItemCard"
import TabSwitcher from "../../components/TabSwitcher"
import { trailerTypes } from "../../constants"
import { useFetch } from "../../hooks/useFetch"
import { TrailerType, getMediaType } from "../../services/constantMap"
import { APIResponse, APIResults } from "../../types/API"

function Popular() {
  const [trailerType, setTrailerType] = useState<TrailerType>("In Theaters")
  const mediaType = getMediaType(trailerType)
  const { data, status, error } = useFetch<APIResponse<APIResults>>(
    `${mediaType}/popular`
  )

  function togglePopularType(tab: string) {
    if (tab == trailerType) return
    setTrailerType(tab)
  }

  if (error) {
    return (
      <section className="section">
        <div className="flex-btw">
          <h2 className="title">Popular</h2>
          <TabSwitcher tabs={trailerTypes} action={togglePopularType} />
        </div>
        <CommonErrorMessage />
      </section>
    )
  }

  const carouselContent =
    status == "pending" ? (
      <CustomScrollingCarousel>
        {[...Array(10)].map((_, index) => (
          <ItemCardSkeleton key={index} />
        ))}
      </CustomScrollingCarousel>
    ) : (
      <CustomScrollingCarousel>
        <div className="invisible w-0 -ml-6">
          <ItemCardSkeleton />
        </div>
        {data?.results.map((item) => (
          <ItemCard key={item.id} item={item} type={mediaType} />
        ))}
      </CustomScrollingCarousel>
    )

  return (
    <section className="section">
      <div className="flex-btw">
        <h2 className="title">Popular</h2>
        <TabSwitcher tabs={trailerTypes} action={togglePopularType} />
      </div>
      {carouselContent}
    </section>
  )
}

export default Popular
