import { useState } from "react"
import BackgroundWall from "../../components/BackgroundWall"
import CommonErrorMessage from "../../components/CommonErrorMessage"
import CustomScrollingCarousel from "../../components/CustomScrollingCarousel"
import TabSwitcher from "../../components/TabSwitcher"
import VideoCard, { VideoCardSkeleton } from "../../components/VideoCard"
import { trailerTypes } from "../../constants"
import { useFetch } from "../../hooks/useFetch"
import {
  TrailerType,
  getMediaItem,
  getMediaType,
} from "../../services/constantMap"
import { APIResponse, APIResults } from "../../types/API"

const today = new Date().toISOString().slice(0, 10)
const urlsMap: Record<string, string> = {
  movie: `movie?primary_release_date.lte=${today}&sort_by=primary_release_date.desc`,
  tv: `tv?first_air_date.lte=${today}&sort_by=primary_release_date.desc`,
}

function Latest() {
  const [trailerType, setTrailerType] = useState<TrailerType>("In Theaters")
  const mediaType = getMediaType(trailerType)
  const { data, status, error } = useFetch<APIResponse<APIResults>>(
    `discover/${urlsMap[mediaType]}}`
  )

  function toggleTrailerType(tab: string) {
    if (tab == trailerType) return
    setTrailerType(tab)
  }

  if (error) {
    return (
      <section className="section">
        <div className="flex-btw">
          <h2 className="title">Popular</h2>
          <TabSwitcher tabs={trailerTypes} action={toggleTrailerType} />
        </div>
        <CommonErrorMessage />
      </section>
    )
  }

  const carouselContent =
    status == "pending" ? (
      <CustomScrollingCarousel>
        <VideoCardSkeleton />
        <VideoCardSkeleton />
        <VideoCardSkeleton />
        <VideoCardSkeleton />
        <VideoCardSkeleton />
        <VideoCardSkeleton />
        <VideoCardSkeleton />
      </CustomScrollingCarousel>
    ) : (
      <CustomScrollingCarousel>
        <div className="invisible w-0 -ml-6">
          <VideoCardSkeleton />
        </div>
        {data?.results.map((item) => {
          const mediaItem = getMediaItem(item, mediaType)
          if (!item.backdrop_path || !mediaItem) return null

          return <VideoCard key={item.id} item={mediaItem} />
        })}
      </CustomScrollingCarousel>
    )

  return (
    <section className="section">
      <BackgroundWall>
        <div className="flex-btw">
          <h2 className="title">Latest</h2>
          <TabSwitcher tabs={trailerTypes} action={toggleTrailerType} />
        </div>
        {carouselContent}
      </BackgroundWall>
    </section>
  )
}
export default Latest
