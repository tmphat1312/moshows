import { Link } from "react-router-dom"
import { APIResult } from "../types/API"
import PlayButton from "./PlayButton"
import RatingCircle from "./RatingCircle"
import { SkeletonBox } from "./Skeleton"
import UnavailablePlaceholder from "./UnavailablePlaceholder"

const IMG_1X_BASE_URL = import.meta.env.VITE_TMDB_BD_1X_BASE_URL
const IMG_2X_BASE_URL = import.meta.env.VITE_TMDB_BD_2X_BASE_URL

function VideoCard({ item }: { item: APIResult }) {
  const title = item.media_type == "movie" ? item.title : item.name

  return (
    <article className={`py-4 space-y-3 ${cardWidth}`}>
      <div className="relative aspect-video">
        <Link to={`/showcase/${item.media_type}/${item.id}`} className="h-full">
          <figure
            className={`${cardWidth} aspect-video drop-shadow-lg  hover:scale-95 transition-transform bg-gray-500`}
          >
            {item.backdrop_path ? (
              <img
                alt={title}
                loading="lazy"
                className="object-cover h-full rounded-md bg-slate-600 drop-shadow-xl"
                src={IMG_1X_BASE_URL + item.backdrop_path}
                srcSet={`${IMG_1X_BASE_URL}${item.backdrop_path} 1x, ${IMG_2X_BASE_URL}${item.backdrop_path} 2x`}
                decoding="async"
              />
            ) : (
              <UnavailablePlaceholder text="No backdrop" />
            )}
          </figure>
        </Link>
        <div className="absolute flex text-lg rounded-full inset-center bg-slate-600/50">
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
      </div>
      <section className="text-center">
        <h3 className="transition-all text-balance hover:text-primary-500 hover:scale-105">
          <Link
            to={`/showcase/${item.media_type}/${item.id}`}
            className="line-clamp-2"
          >
            {title}
          </Link>
        </h3>
        <p className="line-clamp-2">{item.overview || <i>No overview</i>}</p>
      </section>
    </article>
  )
}

const cardWidth = "w-52 sm:w-64 md:w-72"

export function VideoCardSkeleton() {
  return (
    <article className={`py-4 space-y-3 text-center ${cardWidth}`}>
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
