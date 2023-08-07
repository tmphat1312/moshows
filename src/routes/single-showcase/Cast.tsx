import CustomScrollingCarousel from "../../components/CustomScrollingCarousel"
import NoImage from "../../components/NoImage"
import { SkeletonBox } from "../../components/Skeleton"

const BASE_URL = import.meta.env.VITE_TMDB_CAST_BASE_URL

export default function Cast({ cast }: CastProps) {
  return (
    <section>
      <h3 className="text-3xl text-center text-gradient-primary">Cast</h3>
      <CustomScrollingCarousel>
        {cast.map((member) => (
          <article
            key={member.id}
            className={`my-4 overflow-hidden rounded-md ${castCardWidth} bg-gradient-to-r from-slate-200 to-slate-400 text-slate-900`}
          >
            <div className={`${castCardWidth} aspect-square`}>
              {member.profile_path ? (
                <img
                  src={`${BASE_URL}${member.profile_path}`}
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="bg-gradient-to-b from-slate-500 to-slate-400">
                  <NoImage />
                </div>
              )}
            </div>
            <section className="p-1 text-center">
              <h5 className="text-balance line-clamp-2">{member.name}</h5>
              <p className="text-balance line-clamp-2">{member.character}</p>
            </section>
          </article>
        ))}
      </CustomScrollingCarousel>
    </section>
  )
}

const castCardWidth = "w-36 md:w-40"

export type CastProps = {
  cast: {
    id: number
    name: string
    character: string
    profile_path: string
  }[]
}

export function CastSkeleton() {
  return (
    <section className="space-y-4">
      <SkeletonBox>
        <h3 className="invisible text-3xl">Cast</h3>
      </SkeletonBox>
      <CustomScrollingCarousel>
        {Array.from({ length: 7 }).map((_, index) => (
          <article
            key={index}
            className={`my-4 overflow-hidden rounded-md ${castCardWidth} space-y-2`}
          >
            <SkeletonBox>
              <div className={`${castCardWidth} aspect-square`} />
            </SkeletonBox>
            <section className="space-y-1">
              <SkeletonBox>
                <h5 className="invisible line-clamp-2">sample</h5>
              </SkeletonBox>
              <SkeletonBox>
                <p className="invisible line-clamp-2">sample</p>
              </SkeletonBox>
            </section>
          </article>
        ))}
      </CustomScrollingCarousel>
    </section>
  )
}
