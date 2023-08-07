import { useEffect } from "react"
import BackgroundWall from "../../components/BackgroundWall"
import CommonErrorMessage from "../../components/CommonErrorMessage"
import ItemCard, { ItemCardSkeleton } from "../../components/ItemCard"
import Pagination from "../../components/Pagination"
import { useShowcaseStore } from "../../stores/showcaseStore"
import { NavBarPlaceholder } from "../../layout/NavBar"

function GridView() {
  const getData = useShowcaseStore((state) => state.getData)
  const data = useShowcaseStore((state) => state.data)
  const status = useShowcaseStore((state) => state.status)
  const error = useShowcaseStore((state) => state.error)
  const totalItems = useShowcaseStore((state) => state.totalItems)
  const setPage = useShowcaseStore((state) => state.setPage)
  const type = useShowcaseStore((state) => state.type)

  useEffect(() => {
    getData()
  }, [])

  if (error) {
    return (
      <>
        <NavBarPlaceholder />
        <BackgroundWall>
          <CommonErrorMessage />
        </BackgroundWall>
      </>
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
        {data != null && data.length > 0 ? (
          data.map((item) => <ItemCard key={item.id} item={item} type={type} />)
        ) : (
          <p className="text-2xl font-display text-gradient-primary">
            No items found
          </p>
        )}
      </>
    )

  return (
    <BackgroundWall>
      <div className="flex flex-wrap justify-center gap-8">{items}</div>
      {totalItems > 0 && (
        <div className="flex justify-center mt-4">
          <Pagination
            key={totalItems}
            totalItems={totalItems}
            onPageChange={setPage}
          />
        </div>
      )}
    </BackgroundWall>
  )
}

export default GridView
