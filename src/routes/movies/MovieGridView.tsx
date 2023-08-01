import { useEffect } from "react"
import BackgroundWall from "../../components/BackgroundWall"
import CommonErrorMessage from "../../components/CommonErrorMessage"
import ItemCard, { ItemCardSkeleton } from "../../components/ItemCard"
import { useMovieStore } from "../../stores/movieStore"
import "./MovieGridView.css"

function MovieGridView() {
  const getMovies = useMovieStore((state) => state.getMovies)
  const data = useMovieStore((state) => state.movies)
  const status = useMovieStore((state) => state.status)
  const error = useMovieStore((state) => state.error)

  useEffect(() => {
    getMovies()
  }, [])

  if (error) {
    return (
      <BackgroundWall>
        <CommonErrorMessage />
      </BackgroundWall>
    )
  }

  return (
    <BackgroundWall>
      <div className="grid-view">
        {status == "pending" ? (
          <>
            <ItemCardSkeleton />
            <ItemCardSkeleton />
            <ItemCardSkeleton />
            <ItemCardSkeleton />
            <ItemCardSkeleton />
            <ItemCardSkeleton />
            <ItemCardSkeleton />
            <ItemCardSkeleton />
            <ItemCardSkeleton />
            <ItemCardSkeleton />
            <ItemCardSkeleton />
            <ItemCardSkeleton />
            <ItemCardSkeleton />
            <ItemCardSkeleton />
            <ItemCardSkeleton />
            <ItemCardSkeleton />
            <ItemCardSkeleton />
            <ItemCardSkeleton />
            <ItemCardSkeleton />
            <ItemCardSkeleton />
            <ItemCardSkeleton />
            <ItemCardSkeleton />
            <ItemCardSkeleton />
            <ItemCardSkeleton />
          </>
        ) : (
          <>
            {data.map((item) => (
              <ItemCard key={item.id} item={item} type="movie" />
            ))}
          </>
        )}
      </div>
    </BackgroundWall>
  )
}

export default MovieGridView
