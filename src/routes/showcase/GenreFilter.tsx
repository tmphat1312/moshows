import ActiveBadge from "../../components/ActiveBadge"
import { SkeletonBox } from "../../components/Skeleton"
import TextCollapse from "../../components/TextCollapse"
import { useFetch } from "../../hooks/useFetch"
import { useShowcaseStore } from "../../stores/showcaseStore"
import { APIGenreResults } from "../../types/API"

function GenreFilter({ toggleGenre, activeGenres }: GenreFilterProps) {
  const type = useShowcaseStore((state) => state.type)
  const { data, status } = useFetch<{ genres: APIGenreResults[] }>(
    `genre/${type}/list`
  )

  const badgesContent =
    status == "pending" || !data ? (
      <>
        {Array.from({ length: 5 }).map((_, i) => (
          <SkeletonBox key={i}>
            <ActiveBadge
              isActive={false}
              text="action"
              action={() => console.log("action")}
            />
          </SkeletonBox>
        ))}
      </>
    ) : (
      <>
        {data.genres.map((genre) => (
          <ActiveBadge
            key={genre.id}
            text={genre.name}
            action={() => toggleGenre(genre.id)}
            isActive={activeGenres.has(genre.id)}
          />
        ))}
      </>
    )

  return (
    <TextCollapse title="Genres">
      <div className="flex flex-wrap gap-1">{badgesContent}</div>
    </TextCollapse>
  )
}

export type GenreFilterProps = {
  activeGenres: Set<number>
  toggleGenre: (genreId: number) => void
}

export default GenreFilter
