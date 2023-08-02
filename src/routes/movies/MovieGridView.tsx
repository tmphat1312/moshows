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

  const items =
    status == "pending" ? (
      <>
        {Array.from({ length: 20 }).map((_, index) => (
          <ItemCardSkeleton key={index} />
        ))}
      </>
    ) : (
      <>
        {data.length > 0 ? (
          data.map((item) => (
            <ItemCard key={item.id} item={item} type="movie" />
          ))
        ) : (
          <p className="text-2xl font-display text-gradient-primary">
            No movies found
          </p>
        )}
      </>
    )

  return (
    <BackgroundWall>
      <div className="grid-view">{items}</div>
      {totalItems > 0 && (
        <div className="flex justify-center mt-4">
          <Pagination totalItems={totalItems} onPageChange={setPage} />
        </div>
      )}
    </BackgroundWall>
  )
}

export default MovieGridView
