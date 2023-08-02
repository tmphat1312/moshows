import { BsBookmark } from "react-icons/bs"
import { Link } from "react-router-dom"
import dayjs from "../services/dayjs"
import { APIResults } from "../types/API"
import RatingCircle from "./RatingCircle"
import { SkeletonBox } from "./Skeleton"
import { getMediaItem } from "../services/constantMap"
import noPoster from "../assets/images/no-poster.webp"

const IMG_1X_BASE_URL = import.meta.env.VITE_TMDB_IMG_1X_BASE_URL
const IMG_2X_BASE_URL = import.meta.env.VITE_TMDB_IMG_2X_BASE_URL

function ItemCard({ item, type }: { item: APIResults; type: "movie" | "tv" }) {
  const mappedItem = getMediaItem(item, type)
  const title =
    mappedItem.media_type == "movie" ? mappedItem.title : mappedItem.name

  return (
    <article className="inline-block w-32 py-4 space-y-5 text-center sm:w-36 md:w-44">
      <div className="relative flex">
        <Link
          to={`/movie/${mappedItem.id}`}
          className="overflow-hidden rounded-lg drop-shadow-lg"
        >
          {item.poster_path ? (
            <img
              loading="lazy"
              className="object-cover w-full aspect-[9/14] hover:scale-105 transition-transform"
              src={IMG_1X_BASE_URL + mappedItem.poster_path}
              srcSet={`${IMG_1X_BASE_URL}${mappedItem.poster_path} 1x, ${IMG_2X_BASE_URL}${mappedItem.poster_path} 2x`}
              alt={title}
              decoding="async"
            />
          ) : (
            <img
              loading="lazy"
              className="object-cover w-full aspect-[9/14] hover:scale-105 transition-transform filter grayscale"
              src={noPoster}
              alt={title}
              decoding="async"
            />
          )}
        </Link>
        <div className="absolute bottom-0 left-0 translate-y-1/2 translate-x-1/4">
          <RatingCircle rating={mappedItem.vote_average} />
        </div>
        {mappedItem.adult && (
          <div className="absolute top-0 right-0 font-bold text-black bg-white">
            18+
          </div>
        )}
        <button
          title="bookmark this item"
          className="absolute bottom-0 right-0 p-2 text-xl text-primary-600"
        >
          <BsBookmark />
        </button>
      </div>
      <section className="text-center">
        <h3 className="transition-colors hover:text-primary-500 hover:scale-105">
          <Link to={`/movie/${mappedItem.id}`} className="line-clamp-2">
            {title}
          </Link>
        </h3>
        <p>{dayjs(mappedItem.release_date).format("LL")}</p>
      </section>
    </article>
  )
}

export function ItemCardSkeleton() {
  return (
    <article className="inline-flex flex-col w-32 py-4 space-y-4 sm:w-36 md:w-44">
      <SkeletonBox>
        <div className="aspect-[9/14] rounded-lg" />
      </SkeletonBox>
      <section className="space-y-1">
        <SkeletonBox>
          <h3 className="invisible line-clamp-2">
            some text Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Itaque culpa possimus nemo sapiente modi amet, ea voluptates dolore
            sed iure.
          </h3>
        </SkeletonBox>
        <SkeletonBox>
          <p className="invisible">22/22/22222</p>
        </SkeletonBox>
      </section>
    </article>
  )
}

export default ItemCard
