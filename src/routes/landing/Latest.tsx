import { useState } from "react"
import BackgroundWall from "../../components/BackgroundWall"
import CustomScrollingCarousel from "../../components/CustomScrollingCarousel"
import TabSwitcher from "../../components/TabSwitcher"
import VideoCard, { VideoCardSkeleton } from "../../components/VideoCard"
import { useFetch } from "../../hooks/useFetch"
import {
  APIResponse,
  APIResponseMovie,
  APIResponseTV,
  APIResults,
} from "../../types/API"

const trailerTypes = ["In Theaters", "On TV"]
export type TrailerType = (typeof trailerTypes)[number]

const today = new Date().toISOString().slice(0, 10)

const urlsMap: Record<string, string> = {
  movie: `movie?primary_release_date.lte=${today}&sort_by=primary_release_date.desc`,
  tv: `tv?first_air_date.lte=${today}&sort_by=primary_release_date.desc`,
}

function getMediaType(tab: TrailerType) {
  if (tab == "In Theaters") return "movie"
  if (tab == "On TV") return "tv"
  return "movie"
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

  if (status == "pending") {
    return (
      <section className="section">
        <BackgroundWall>
          <div className="flex-btw">
            <h2 className="title">Latest</h2>
            <TabSwitcher tabs={trailerTypes} action={toggleTrailerType} />
          </div>
          <CustomScrollingCarousel>
            <VideoCardSkeleton />
            <VideoCardSkeleton />
            <VideoCardSkeleton />
            <VideoCardSkeleton />
            <VideoCardSkeleton />
            <VideoCardSkeleton />
            <VideoCardSkeleton />
          </CustomScrollingCarousel>
        </BackgroundWall>
      </section>
    )
  }

  if (error) {
    return <p>{error.message ? error.message : "there was an error"}</p>
  }

  return (
    <section className="section">
      <BackgroundWall>
        <div className="flex-btw">
          <h2 className="title">Latest</h2>
          <TabSwitcher tabs={trailerTypes} action={toggleTrailerType} />
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

            return <VideoCard key={item.id} item={mediaItem} />
          })}
        </CustomScrollingCarousel>
      </BackgroundWall>
    </section>
  )
}
export default Latest
