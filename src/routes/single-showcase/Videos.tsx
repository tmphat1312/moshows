import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import { APIVideoResult } from "../../types/API"
import BackgroundWall from "../../components/BackgroundWall"
import CustomScrollingCarousel from "../../components/CustomScrollingCarousel"
import PlayButton from "../../components/PlayButton"

function Videos() {
  const { id, type } = useParams<{ id: string; type: string }>()
  const { data, status, error } = useFetch<{
    id: number
    results: APIVideoResult[]
  }>(`/${type}/${id}/videos`)

  if (error) return <div>error</div>

  if (status === "pending") return <div>Loading...</div>

  const videos = data?.results

  if (videos?.length === 0 || !videos) return <div>No videos</div>

  const officialVideos = videos.filter((video) => video.official).reverse()

  return (
    <BackgroundWall>
      <h4 className="text-2xl">Official trailers</h4>
      <CustomScrollingCarousel>
        {officialVideos.map((video) => (
          <article key={video.id} className="relative my-4 w-[300px]">
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
            <div className="absolute inset-center backdrop-blur-[2px] rounded-full">
              <PlayButton />
            </div>
            <h5 className="text-center line-clamp-2">{video.name}</h5>
          </article>
        ))}
      </CustomScrollingCarousel>
    </BackgroundWall>
  )
}

export default Videos
