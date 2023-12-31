import { useParams } from "react-router-dom"
import BackgroundWall from "../../components/BackgroundWall"
import CommonErrorMessage from "../../components/CommonErrorMessage"
import CustomScrollingCarousel from "../../components/CustomScrollingCarousel"
import NoItemsMessage from "../../components/NoItemsMessage"
import PlayButton from "../../components/PlayButton"
import { VideoCardSkeleton } from "../../components/VideoCard"
import { useFetch } from "../../hooks/useFetch"
import { useVideoPlayerStore } from "../../stores/videoPlayerStore"
import { APIVideoResult } from "../../types/API"

export default function Videos() {
  const { id, type } = useParams<{ id: string; type: string }>()
  const { data, status } = useFetch<FetchType>(`/${type}/${id}/videos`)
  const setVideoKey = useVideoPlayerStore((state) => state.setVideoKey)

  if (status === "pending") {
    return (
      <CommonLayout>
        <CustomScrollingCarousel>
          {Array.from({ length: 9 }).map((_, index) => (
            <VideoCardSkeleton key={index} />
          ))}
        </CustomScrollingCarousel>
      </CommonLayout>
    )
  }

  if (status == "rejected" || data == null) {
    return (
      <CommonLayout>
        <CommonErrorMessage />
      </CommonLayout>
    )
  }

  const videos = data?.results ?? []
  const officialVideos = videos.filter((video) => video.official).reverse()

  return (
    <CommonLayout>
      {officialVideos.length > 0 ? (
        <CustomScrollingCarousel>
          {officialVideos.map((video) => (
            <article
              key={video.id}
              className="w-56 my-4 sm:w-60 md:w-64 md:my-6"
            >
              <div className="relative">
                <a
                  href={`https://www.youtube.com/watch?v=${video.key}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                    alt={video.name}
                    className="rounded-md drop-shadow-lg"
                  />
                </a>
                <div className="absolute flex rounded-full inset-center backdrop-brightness-50">
                  <PlayButton playAction={() => setVideoKey(video.key)} />
                </div>
              </div>
              <h5 className="text-lg text-center line-clamp-2 text-balance">
                {video.name}
              </h5>
            </article>
          ))}
        </CustomScrollingCarousel>
      ) : (
        <NoItemsMessage />
      )}
    </CommonLayout>
  )
}

type FetchType = {
  id: number
  results: APIVideoResult[]
}

function CommonLayout({ children }: { children: React.ReactNode }) {
  return (
    <BackgroundWall>
      <h4 className="title">Official trailers</h4>
      {children}
    </BackgroundWall>
  )
}
