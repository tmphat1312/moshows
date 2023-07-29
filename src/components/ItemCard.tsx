import dayjs from "dayjs"
import localizedFormat from "dayjs/plugin/localizedFormat"
import { BsBookmark } from "react-icons/bs"
import { Link } from "react-router-dom"
import RatingCircle from "./RatingCircle"
import { SkeletonBox } from "./Skeleton"

dayjs.extend(localizedFormat)

const IMG_1X_BASE_URL = import.meta.env.VITE_TMDB_IMG_1X_BASE_URL
const IMG_2X_BASE_URL = import.meta.env.VITE_TMDB_IMG_2X_BASE_URL

function ItemCard({ item }: { item: ItemCardProps }) {
  const title = item.media_type == "movie" ? item.title : item.name

  return (
    <article className="inline-block py-4 space-y-4 text-center w-36 md:w-44 peer-space-x-sm">
      <div className="relative flex">
        <Link
          to={`/movie/${item.id}`}
          className="overflow-hidden rounded-lg drop-shadow-lg"
        >
          <img
            loading="lazy"
            className="object-cover w-36 md:w-44 aspect-[9/14] hover:scale-105 transition-transform"
            src={IMG_1X_BASE_URL + item.poster_path}
            srcSet={`${IMG_1X_BASE_URL}${item.poster_path} 1x, ${IMG_2X_BASE_URL}${item.poster_path} 2x`}
            alt={title}
            decoding="async"
          />
        </Link>
        <div className="absolute bottom-0 left-0 translate-y-1/2 translate-x-1/4">
          <RatingCircle rating={item.vote_average} />
        </div>
        {item.adult && (
          <div className="absolute top-0 right-0 font-bold text-black bg-white">
            18+
          </div>
        )}
        <button
          title="bookmark this item"
          className="absolute bottom-0 right-0 p-2 text-xl"
        >
          <BsBookmark />
        </button>
      </div>
      <section className="text-center">
        <h3 className="transition-colors hover:text-primary-500 hover:scale-105">
          <Link to={`/movie/${item.id}`} className="line-clamp-2">
            {title}
          </Link>
        </h3>
        <p>{dayjs(item.release_date).format("LL")}</p>
      </section>
    </article>
  )
}

export function ItemCardSkeleton() {
  return (
    <article className="inline-flex flex-col py-4 space-y-4 peer-space-x-sm w-36 md:w-44">
      <SkeletonBox>
        <div className="aspect-[9/14] rounded-lg" />
      </SkeletonBox>
      <section className="space-y-1">
        <SkeletonBox>
          <h3 className="transition-colors hover:text-primary-500 hover:scale-105">
            <span className="invisible line-clamp-2">
              some text Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Itaque culpa possimus nemo sapiente modi amet, ea voluptates
              dolore sed iure.
            </span>
          </h3>
        </SkeletonBox>
        <SkeletonBox>
          <p>
            <span className="invisible">22/22/22222</span>
          </p>
        </SkeletonBox>
      </section>
    </article>
  )
}

export type ItemCardProps =
  | {
      adult: boolean
      backdrop_path: string
      id: number
      title: string
      overview: string
      poster_path: string
      media_type: "movie"
      genre_ids: number[]
      popularity: number
      release_date: string
      video: boolean
      vote_average: number
      vote_count: number
    }
  | {
      adult: boolean
      backdrop_path: string
      id: number
      name: string
      overview: string
      poster_path: string
      media_type: "tv"
      genre_ids: number[]
      popularity: number
      release_date: string
      video: boolean
      vote_average: number
      vote_count: number
    }

export default ItemCard
