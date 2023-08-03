import { useEffect } from "react"
import BackgroundWall from "../../components/BackgroundWall"
import CommonErrorMessage from "../../components/CommonErrorMessage"
import ItemCard, { ItemCardSkeleton } from "../../components/ItemCard"
import Pagination from "../../components/Pagination"
import { useTvStore } from "../../stores/tvStore"
import "./TvGridView.css"

function MovieGridView() {
  const getTvs = useTvStore((state) => state.getTvs)
  const data = useTvStore((state) => state.tvs)
  const status = useTvStore((state) => state.status)
  const error = useTvStore((state) => state.error)
  const totalItems = useTvStore((state) => state.totalItems)
  const setPage = useTvStore((state) => state.setPage)

  useEffect(() => {
    getTvs()
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
        {data.map((item) => (
          <ItemCard key={item.id} item={item} type="tv" />
        ))}
      </>
    )

  return (
    <BackgroundWall>
      <div className="grid-view">{items}</div>
      <div className="flex justify-center mt-4">
        <Pagination totalItems={totalItems} onPageChange={setPage} />
      </div>
    </BackgroundWall>
  )
}

export default MovieGridView
