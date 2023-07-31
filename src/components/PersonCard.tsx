import { Link } from "react-router-dom"
import { APIPersonResults } from "../types/API"
import { SkeletonBox } from "./Skeleton"

const IMG_1X_BASE_URL = import.meta.env.VITE_TMDB_PF_1X_BASE_URL
const IMG_2X_BASE_URL = import.meta.env.VITE_TMDB_PF_2X_BASE_URL

function PersonCard({ person }: { person: APIPersonResults }) {
  const knownFors = person.known_for.map((item) => {
    return item.media_type === "movie" ? item.title : item.name
  })

  return (
    <article className="flex flex-col w-48 my-4 overflow-hidden text-center transition-transform rounded-lg  md:w-52 hover:scale-105 bg-slate-500">
      <Link to={`/person/${person.id}`}>
        <img
          alt={person.name}
          loading="lazy"
          className="object-cover w-full mx-auto aspect-square bg-slate-900 drop-shadow-xl"
          src={IMG_1X_BASE_URL + person.profile_path}
          srcSet={`${IMG_1X_BASE_URL}${person.profile_path} 1x, ${IMG_2X_BASE_URL}${person.profile_path} 2x`}
          decoding="async"
        />
      </Link>
      <section className="py-2">
        <Link to={`/person/${person.id}`}>
          <h3 className="px-1 transition-all hover:skew-y-2 bg-slate-600 line-clamp-2 text-balance hover:text-primary-500 hover:scale-105">
            {person.name}
          </h3>
        </Link>
        <p className="line-clamp-2">{knownFors.join(", ")}</p>
      </section>
    </article>
  )
}

export function PersonCardSkeleton() {
  return (
    <article className="flex flex-col w-48 my-4 space-y-2 overflow-hidden rounded-lg  md:w-52">
      <SkeletonBox>
        <div className="w-full aspect-square" />
      </SkeletonBox>
      <section className="space-y-1">
        <SkeletonBox>
          <h3 className="invisible">name</h3>
        </SkeletonBox>
        <SkeletonBox>
          <p className="invisible line-clamp-2">
            known for Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ullam itaque laboriosam modi.
          </p>
        </SkeletonBox>
      </section>
    </article>
  )
}

export default PersonCard