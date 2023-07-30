import { BsBookmark } from "react-icons/bs"
import { APIResults } from "../types/API"
import PlayButton from "./PlayButton"
import RatingCircle from "./RatingCircle"
import { Link } from "react-router-dom"
import UnavailablePlaceholder from "./UnavailablePlaceholder"
import { SkeletonBox } from "./Skeleton"

const IMG_1X_BASE_URL = import.meta.env.VITE_TMDB_BD_1X_BASE_URL
const IMG_2X_BASE_URL = import.meta.env.VITE_TMDB_BD_2X_BASE_URL

function VideoCard({ item }: { item: APIResults }) {
  const title = item.media_type == "movie" ? item.title : item.name

  return (
    <article className="w-64 py-4 space-y-3 text-center peer-space-x-sm md:w-72">
      <div className="relative aspect-video">
        {item.backdrop_path ? (
          <Link to={`/${item.media_type}/${item.id}`}>
            <img
              alt={title}
              loading="lazy"
              className="object-cover h-full transition-transform rounded-md bg-slate-900 drop-shadow-xl hover:scale-95"
              src={IMG_1X_BASE_URL + item.backdrop_path}
              srcSet={`${IMG_1X_BASE_URL}${item.backdrop_path} 1x, ${IMG_2X_BASE_URL}${item.backdrop_path} 2x`}
              decoding="async"
            />
          </Link>
        ) : (
          <UnavailablePlaceholder text="Unavailable backdrop" />
        )}
        <div className="absolute text-lg inset-center">
          <PlayButton />
        </div>
        <div className="absolute bottom-0 translate-x-1/4 translate-y-1/4">
          <RatingCircle rating={item.vote_average} />
        </div>
        {item.adult && (
          <div className="absolute top-0 right-0 font-bold text-black bg-white">
            18+
          </div>
        )}
        <button
          title="bookmark this item"
          className="absolute bottom-0 right-0 p-2 text-xl drop-shadow-xl text-primary-600"
        >
          <BsBookmark />
        </button>
      </div>
      <section>
        <h3 className="transition-all line-clamp-2 text-balance hover:text-primary-500 hover:scale-105">
          <Link to={`/${item.media_type}/${item.id}`}>{title}</Link>
        </h3>
        <p className="line-clamp-2">{item.overview || <i>No overview</i>}</p>
      </section>
    </article>
  )
}

export function VideoCardSkeleton() {
  return (
    <article className="w-64 py-4 space-y-3 text-center peer-space-x-sm md:w-72">
      <SkeletonBox>
        <div className="rounded-lg aspect-video" />
      </SkeletonBox>
      <section className="space-y-1">
        <SkeletonBox>
          <h3 className="transition-colors hover:text-primary-500 hover:scale-105">
            <span className="invisible">title</span>
          </h3>
        </SkeletonBox>
        <SkeletonBox>
          <p>
            <span className="invisible line-clamp-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              aliquid dolor beatae, maxime dolores veritatis!
            </span>
          </p>
        </SkeletonBox>
      </section>
    </article>
  )
}

export default VideoCard
