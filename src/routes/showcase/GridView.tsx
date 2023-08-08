import { useEffect } from "react"
import BackgroundWall from "../../components/BackgroundWall"
import CommonErrorMessage from "../../components/CommonErrorMessage"
import ItemCard, { ItemCardSkeleton } from "../../components/ItemCard"
import Pagination from "../../components/Pagination"
import { useShowcaseStore } from "../../stores/showcaseStore"
import NoItemsMessage from "../../components/NoItemsMessage"

function GridView() {
  const getData = useShowcaseStore((state) => state.getData)
  const setPage = useShowcaseStore((state) => state.setPage)
  const data = useShowcaseStore((state) => state.data)
  const type = useShowcaseStore((state) => state.type)
  const status = useShowcaseStore((state) => state.status)
  const totalItems = useShowcaseStore((state) => state.totalItems)

  useEffect(() => {
    getData()
  }, [])

  let htmlContent
  if (status == "pending") {
    htmlContent = (
      <div className="flex flex-wrap justify-center gap-8">
        {Array.from({ length: 20 }).map((_, index) => (
          <ItemCardSkeleton key={index} />
        ))}
      </div>
    )
  } else if (status == "rejected" || data == null) {
    htmlContent = <CommonErrorMessage />
  } else {
    htmlContent = (
      <div className="flex flex-wrap justify-center gap-8">
        {data.length > 0 ? (
          data.map((item) => <ItemCard key={item.id} item={item} type={type} />)
        ) : (
          <NoItemsMessage />
        )}
      </div>
    )
  }

  return (
    <BackgroundWall>
      {htmlContent}
      {data && data.length < totalItems && (
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
