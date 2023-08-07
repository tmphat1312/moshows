import { useState } from "react"
import BackgroundWall from "../../components/BackgroundWall"
import CommonErrorMessage from "../../components/CommonErrorMessage"
import CustomScrollingCarousel from "../../components/CustomScrollingCarousel"
import NoItemsMessage from "../../components/NoItemsMessage"
import TabSwitcher from "../../components/TabSwitcher"
import VideoCard, { VideoCardSkeleton } from "../../components/VideoCard"
import { trailerTypes } from "../../constants"
import { useFetch } from "../../hooks/useFetch"
import {
  TrailerType,
  getMediaItem,
  getMediaType,
} from "../../services/constantMap"
import { APIResponse, APIResult } from "../../types/API"

export default function Latest() {
  const [trailerType, setTrailerType] = useState<TrailerType>("In Theaters")
  const mediaType = getMediaType(trailerType)
  const { data, status } = useFetch<FetchType>(urlsMap[mediaType])

  function toggleTrailerType(tab: string) {
    if (tab != trailerType) setTrailerType(tab)
  }

  if (status == "pending") {
    return (
      <CommonLayout tabAction={toggleTrailerType}>
        <CustomScrollingCarousel>
          {[...Array(10)].map((_, index) => (
            <VideoCardSkeleton key={index} />
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

  const latest = data?.results ?? []
  return (
    <CommonLayout tabAction={toggleTrailerType}>
      {latest.length > 0 ? (
        <CustomScrollingCarousel>
          <div className="invisible w-0 -ml-6">
            <VideoCardSkeleton />
          </div>
          {latest.map((item) => (
            <VideoCard key={item.id} item={getMediaItem(item, mediaType)} />
          ))}
        </CustomScrollingCarousel>
      ) : (
        <NoItemsMessage />
      )}
    </CommonLayout>
  )
}

// #private
type FetchType = APIResponse<APIResult>

const today = new Date().toISOString().slice(0, 10)
const urlsMap: Record<string, string> = {
  movie: `discover/movie?primary_release_date.lte=${today}&sort_by=primary_release_date.desc`,
  tv: `discover/tv?first_air_date.lte=${today}&sort_by=primary_release_date.desc`,
}

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
        <div className="flex-btw">
          <h2 className="title">Latest</h2>
          <TabSwitcher tabs={trailerTypes} action={tabAction} />
        </div>
        {children}
      </BackgroundWall>
    </section>
  )
}
// #private
