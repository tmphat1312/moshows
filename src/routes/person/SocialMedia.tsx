import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai"
import { BsTiktok } from "react-icons/bs"

function SocialMedia() {
  const { id } = useParams<{ id: string }>()
  const { data, status, error } = useFetch<{
    facebook_id: string | null
    instagram_id: string | null
    tiktok_id: string | null
    twitter_id: string | null
    youtube_id: string | null
  }>(`/person/${id}/external_ids`)

  if (status === "rejected") {
    return <div>There was an error: {error?.message}</div>
  }

  if (status === "pending") {
    return <div>Loading...</div>
  }

  if (data == null) {
    return <div>Person not found</div>
  }

  // TODO: no social media

  return (
    <section>
      <h4 className="mb-2">Social</h4>
      <ul className="space-y-2">
        {data.facebook_id && data.facebook_id != "" && (
          <li>
            <a
              href={`https://www.facebook.com/${data.facebook_id}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-lg"
            >
              <AiFillFacebook /> {data.facebook_id}
            </a>
          </li>
        )}
        {data.instagram_id && data.instagram_id != "" && (
          <li>
            <a
              href={`https://www.instagram.com/${data.instagram_id}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-lg"
            >
              <AiFillInstagram /> @{data.instagram_id}
            </a>
          </li>
        )}
        {data.tiktok_id && data.tiktok_id != "" && (
          <li>
            <a
              href={`https://www.tiktok.com/${data.tiktok_id}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-lg"
            >
              <BsTiktok /> @{data.tiktok_id}
            </a>
          </li>
        )}
        {data.twitter_id && data.twitter_id != "" && (
          <li>
            <a
              href={`https://www.twitter.com/${data.twitter_id}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-lg"
            >
              <AiFillTwitterSquare /> @{data.twitter_id}
            </a>
          </li>
        )}
        {data.youtube_id && data.youtube_id != "" && (
          <li>
            <a
              href={`https://www.youtube.com/${data.youtube_id}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-lg"
            >
              <AiFillYoutube /> {data.youtube_id}
            </a>
          </li>
        )}
      </ul>
    </section>
  )
}

export default SocialMedia
