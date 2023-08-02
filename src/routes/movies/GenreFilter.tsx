import ActiveBadge from "../../components/ActiveBadge"
import { SkeletonBox } from "../../components/Skeleton"
import { useFetch } from "../../hooks/useFetch"
import { useMovieStore } from "../../stores/movieStore"
import { APIGenreResults } from "../../types/API"

function GenreFilter() {
  const toggleGenre = useMovieStore((state) => state.toggleGenre)
  const { genres } = useMovieStore((state) => state.filter)
  const { data, status } = useFetch<{ genres: APIGenreResults[] }>(
    "genre/movie/list"
  )

  const badgesContent =
    status == "pending" || !data ? (
      <>
        <SkeletonBox>
          <ActiveBadge
            isActive={false}
            text="action"
            action={() => console.log("action")}
          />
        </SkeletonBox>
        <SkeletonBox>
          <ActiveBadge
            isActive={false}
            text="action"
            action={() => console.log("action")}
          />
        </SkeletonBox>
        <SkeletonBox>
          <ActiveBadge
            isActive={false}
            text="action"
            action={() => console.log("action")}
          />
        </SkeletonBox>
        <SkeletonBox>
          <ActiveBadge
            isActive={false}
            text="action"
            action={() => console.log("action")}
          />
        </SkeletonBox>
        <SkeletonBox>
          <ActiveBadge
            isActive={false}
            text="action"
            action={() => console.log("action")}
          />
        </SkeletonBox>
      </>
    ) : (
      <>
        {data.genres.map((genre) => (
          <ActiveBadge
            key={genre.id}
            text={genre.name}
            action={() => toggleGenre(genre.id)}
            isActive={genres.has(genre.id)}
          />
        ))}
      </>
    )

  return (
    <div className="space-y-1">
      <h6>Genres</h6>
      <div className="flex flex-wrap gap-1">{badgesContent}</div>
    </div>
  )
}

export default GenreFilter