import { useFetch } from "../hooks/useFetch"
import { useVideoPlayerStore } from "../stores/videoPlayerStore"
import { APIVideoResult } from "../types/API"
import BackgroundWall from "./BackgroundWall"
import CommonErrorMessage from "./CommonErrorMessage"
import { SkeletonBox } from "./Skeleton"
import YoutubePlayer from "./YoutubePlayer"

function VideoPlayer() {
  const videoId = useVideoPlayerStore((state) => state.videoId)
  const type = useVideoPlayerStore((state) => state.type)
  const { data, status } = useFetch<FetchType>(`${type}/${videoId}/videos`)

  if (status === "pending") {
    return (
      <SkeletonBox>
        <div className="w-[90vw] max-w-5xl aspect-video" />
      </SkeletonBox>
    )
  }

  if (status == "rejected" || data == null) {
    return (
      <BackgroundWall>
        <CommonErrorMessage />
      </BackgroundWall>
    )
  }

  const videos = data?.results ?? []
  const officialVideos = videos.filter((video) => video.official).reverse()

  return (
    <div className=" bg-slate-300">
      {officialVideos.length > 0 ? (
        <YoutubePlayer videoKey={officialVideos[0].key} />
      ) : (
        <h5 className="py-8 text-5xl text-center text-gradient-primary">
          No videos available!
        </h5>
      )}
    </div>
  )
}

type FetchType = {
  id: number
  results: APIVideoResult[]
}

export default VideoPlayer
