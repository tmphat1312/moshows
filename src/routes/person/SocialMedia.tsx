import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai"
import { BsTiktok } from "react-icons/bs"
import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import { APISocialResult } from "../../types/API"
import { SkeletonBox } from "../../components/Skeleton"

export default function SocialMedia() {
  const { id } = useParams<{ id: string }>()
  const { data, status } = useFetch<APISocialResult>(
    `/person/${id}/external_ids`
  )

  if (status === "pending") {
    return (
      <CommonLayout>
        <div className="space-y-1">
          {[...Array(5)].map((_, index) => (
            <SkeletonBox key={index}>
              <p className="invisible">Loading...</p>
            </SkeletonBox>
          ))}
        </div>
      </CommonLayout>
    )
  }

  if (status == "rejected" || data == null) {
    return (
      <CommonLayout>
        <p className="error-message">Error loading social media</p>
      </CommonLayout>
    )
  }

  const socialMediaLinks = [
    {
      id: "facebook",
      icon: <AiFillFacebook />,
      url: `https://www.facebook.com/${data.facebook_id}`,
      username: data.facebook_id,
      hasAccount: data.facebook_id != null && data.facebook_id !== "",
    },
    {
      id: "instagram",
      icon: <AiFillInstagram />,
      url: `https://www.instagram.com/${data.instagram_id}`,
      username: `@${data.instagram_id}`,
      hasAccount: data.instagram_id != null && data.instagram_id !== "",
    },
    {
      id: "tiktok",
      icon: <BsTiktok />,
      url: `https://www.tiktok.com/${data.tiktok_id}`,
      username: `@${data.tiktok_id}`,
      hasAccount: data.tiktok_id != null && data.tiktok_id !== "",
    },
    {
      id: "twitter",
      icon: <AiFillTwitterSquare />,
      url: `https://www.twitter.com/${data.twitter_id}`,
      username: `@${data.twitter_id}`,
      hasAccount: data.twitter_id != null && data.twitter_id !== "",
    },
    {
      id: "youtube",
      icon: <AiFillYoutube />,
      url: `https://www.youtube.com/${data.youtube_id}`,
      username: data.youtube_id,
      hasAccount: data.youtube_id != null && data.youtube_id !== "",
    },
  ]
  const activeSocialMediaLinks = socialMediaLinks.filter(
    (link) => link.hasAccount
  )

  return (
    <CommonLayout>
      <ul className="space-y-2">
        {activeSocialMediaLinks.map((link) => (
          <li key={link.id}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:underline"
            >
              {link.icon}
              <span>{link.username}</span>
            </a>
          </li>
        ))}
      </ul>
    </CommonLayout>
  )
}

function CommonLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <h4 className="mb-2">Social</h4>
      {children}
    </section>
  )
}
