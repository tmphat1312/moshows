import ActiveBadge from "../../components/ActiveBadge"
import { SkeletonBox } from "../../components/Skeleton"
import TextCollapse from "../../components/TextCollapse"
import { useFetch } from "../../hooks/useFetch"
import { useShowcaseStore } from "../../stores/showcaseStore"
import { APIGenreResult } from "../../types/API"

export default function GenreFilter({
  toggleGenre,
  activeGenres,
}: GenreFilterProps) {
  const type = useShowcaseStore((state) => state.type)
  const { data, status } = useFetch<FetchType>(`genre/${type}/list`)

  if (status == "pending") {
    return (
      <>
        {Array.from({ length: 5 }).map((_, i) => (
          <SkeletonBox key={i}>
            <ActiveBadge isActive={false} text="action" action={() => null} />
          </SkeletonBox>
        ))}
      </>
    )
  }

  if (status == "rejected" || data == null) {
    return <p className="error-message">Error loading genres</p>
  }

  return (
    <TextCollapse title="Genres">
      <div className="flex flex-wrap gap-1">
        {data.genres.map((genre) => (
          <ActiveBadge
            key={genre.id}
            text={genre.name}
            action={() => toggleGenre(genre.id)}
            isActive={activeGenres.has(genre.id)}
          />
        ))}
      </div>
    </TextCollapse>
  )
}

type FetchType = { genres: APIGenreResult[] }

export type GenreFilterProps = {
  activeGenres: Set<number>
  toggleGenre: (genreId: number) => void
}
