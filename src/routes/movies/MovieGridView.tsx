import { useEffect } from "react"
import BackgroundWall from "../../components/BackgroundWall"
import CommonErrorMessage from "../../components/CommonErrorMessage"
import ItemCard, { ItemCardSkeleton } from "../../components/ItemCard"
import Pagination from "../../components/Pagination"
import { useMovieStore } from "../../stores/movieStore"
import "./MovieGridView.css"

function MovieGridView() {
  const getMovies = useMovieStore((state) => state.getMovies)
  const data = useMovieStore((state) => state.movies)
  const status = useMovieStore((state) => state.status)
  const error = useMovieStore((state) => state.error)
  const totalItems = useMovieStore((state) => state.totalItems)
  const setPage = useMovieStore((state) => state.setPage)

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
      <div className="flex justify-center mt-4">
        <Pagination totalItems={totalItems} onPageChange={setPage} />
      </div>
    </BackgroundWall>
  )
}

export default MovieGridView
