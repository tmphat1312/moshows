import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import { APIVideoResult } from "../../types/API"
import BackgroundWall from "../../components/BackgroundWall"
import CustomScrollingCarousel from "../../components/CustomScrollingCarousel"
import PlayButton from "../../components/PlayButton"
import CommonErrorMessage from "../../components/CommonErrorMessage"
import { VideoCardSkeleton } from "../../components/VideoCard"

function Videos() {
  const { id, type } = useParams<{ id: string; type: string }>()
  const { data, status, error } = useFetch<{
    id: number
    results: APIVideoResult[]
  }>(`/${type}/${id}/videos`)

  if (error) {
    return (
      <BackgroundWall>
        <h4 className="title">Official trailers</h4>
        <CommonErrorMessage />
      </BackgroundWall>
    )
  }

  if (status === "pending") {
    return (
      <BackgroundWall>
        <VideoCardSkeleton />
      </BackgroundWall>
    )
  } // TODO: add loading skeleton

  const videos = data?.results ?? []
  const officialVideos = videos.filter((video) => video.official).reverse()
  const content =
    officialVideos.length > 0 ? (
      <CustomScrollingCarousel>
        {officialVideos.map((video) => (
          <article key={video.id} className="w-56 my-4 sm:w-60 md:w-64 md:my-6">
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
                <PlayButton />
              </div>
            </div>
            <h5 className="text-lg text-center line-clamp-2 text-balance">
              {video.name}
            </h5>
          </article>
        ))}
      </CustomScrollingCarousel>
    ) : (
      <p className="my-6 text-2xl font-display">No videos available</p>
    )

  return (
    <BackgroundWall>
      <h4 className="title">Official trailers</h4>
      {content}
    </BackgroundWall>
  )
}

export default Videos
