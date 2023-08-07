import { useParams } from "react-router-dom"
import CommonErrorMessage from "../../components/CommonErrorMessage"
import CustomScrollingCarousel from "../../components/CustomScrollingCarousel"
import ItemCard, { ItemCardSkeleton } from "../../components/ItemCard"
import NoItemsMessage from "../../components/NoItemsMessage"
import { useFetch } from "../../hooks/useFetch"
import { APIResponse, APIResult } from "../../types/API"

export default function Similar() {
  const { id, type } = useParams<{ id: string; type: string }>()
  const { data, status } = useFetch<FetchType>(`/${type}/${id}/similar`)

  if (status == "pending") {
    return (
      <CommonLayout>
        <CustomScrollingCarousel>
          {Array.from({ length: 7 }).map((_, index) => (
            <ItemCardSkeleton key={index} />
          ))}
        </CustomScrollingCarousel>
      </CommonLayout>
    )
  }

  if (status == "rejected" || data == null) {
    return (
      <CommonLayout>
        <CommonErrorMessage />
      </CommonLayout>
    )
  }

  const similarItems = data?.results ?? []
  return (
    <CommonLayout>
      {similarItems.length > 0 ? (
        <CustomScrollingCarousel>
          {similarItems.map((item) => (
            <ItemCard key={item.id} item={item} type={type as "tv" | "movie"} />
          ))}
        </CustomScrollingCarousel>
      ) : (
        <NoItemsMessage />
      )}
    </CommonLayout>
  )
}

// #private
type FetchType = APIResponse<APIResult>

function CommonLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <h2 className="title">Similar</h2>
      {children}
    </section>
  )
}
// #private
