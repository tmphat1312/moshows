import { useEffect } from "react"
import BackgroundWall from "../../components/BackgroundWall"
import CommonErrorMessage from "../../components/CommonErrorMessage"
import ItemCard, { ItemCardSkeleton } from "../../components/ItemCard"
import Pagination from "../../components/Pagination"
import { useShowcaseStore } from "../../stores/showcaseStore"
import NoItemsMessage from "../../components/NoItemsMessage"
import GridView from "../../layout/GridView"

function ShowcaseView() {
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
      <GridView>
        {Array.from({ length: 20 }).map((_, index) => (
          <ItemCardSkeleton key={index} />
        ))}
      </GridView>
    )
  } else if (status == "rejected" || data == null) {
    htmlContent = <CommonErrorMessage />
  } else {
    htmlContent = (
      <GridView>
        {data.length > 0 ? (
          data.map((item) => <ItemCard key={item.id} item={item} type={type} />)
        ) : (
          <NoItemsMessage />
        )}
      </GridView>
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

export default ShowcaseView
