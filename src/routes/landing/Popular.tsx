import { useState } from "react"
import CustomScrollingCarousel from "../../components/CustomScrollingCarousel"
import ItemCard, { ItemCardSkeleton } from "../../components/ItemCard"
import TabSwitcher from "../../components/TabSwitcher"
import { useFetch } from "../../hooks/useFetch"
import { APIResponse, APIResponseMovie, APIResponseTV } from "../../types/API"
import { TrailerType } from "./Latest"

const popularTypes = ["In Theaters", "On TV"]
export type PopularType = (typeof popularTypes)[number]

function getMediaType(tab: PopularType) {
  if (tab == "In Theaters") return "movie"
  if (tab == "On TV") return "tv"
  return "movie"
}

function Popular() {
  const [trailerType, setTrailerType] = useState<TrailerType>("In Theaters")
  const mediaType = getMediaType(trailerType)
  const { data, status, error } = useFetch<APIResponse>(`${mediaType}/popular`)

  function togglePopularType(tab: string) {
    if (tab == trailerType) return
    setTrailerType(tab)
  }

  if (status == "pending") {
    return (
      <section className="section">
        <div className="flex-btw">
          <h2 className="title">Popular</h2>
          <TabSwitcher tabs={popularTypes} action={togglePopularType} />
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
        <h2 className="title">Popular</h2>
        <TabSwitcher tabs={popularTypes} action={togglePopularType} />
      </div>
      <CustomScrollingCarousel>
        {data?.results.map((item) => {
          if (!item.backdrop_path) return null

          let mediaItem
          if (mediaType == "movie") {
            mediaItem = {
              ...item,
              media_type: "movie",
            } as APIResponseMovie
          } else if (mediaType == "tv") {
            mediaItem = {
              ...item,
              media_type: "tv",
            } as APIResponseTV
          } else {
            return null
          }

          return <ItemCard key={item.id} item={mediaItem} />
        })}
      </CustomScrollingCarousel>
    </section>
  )
}

export default Popular
