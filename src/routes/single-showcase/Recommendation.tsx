import { useParams } from "react-router-dom"
import BackgroundWall from "../../components/BackgroundWall"
import CommonErrorMessage from "../../components/CommonErrorMessage"
import CustomScrollingCarousel from "../../components/CustomScrollingCarousel"
import ItemCard, { ItemCardSkeleton } from "../../components/ItemCard"
import NoItemsMessage from "../../components/NoItemsMessage"
import { useFetch } from "../../hooks/useFetch"
import { APIResponse, APIResults } from "../../types/API"

export default function Recommendation() {
  const { id, type } = useParams<{ id: string; type: string }>()
  const { data, status } = useFetch<FetchType>(`/${type}/${id}/recommendations`)

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

  const recommendationItems = data?.results ?? []
  return (
    <section>
      <BackgroundWall>
        <h2 className="title">Recommendation</h2>
        {recommendationItems.length > 0 ? (
          <CustomScrollingCarousel>
            {recommendationItems.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                type={type as "tv" | "movie"}
              />
            ))}
          </CustomScrollingCarousel>
        ) : (
          <NoItemsMessage />
        )}
      </BackgroundWall>
    </section>
  )
}

// #private
type FetchType = APIResponse<APIResults>

function CommonLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <h2 className="title">Recommendation</h2>
      <BackgroundWall>{children}</BackgroundWall>
    </section>
  )
}
// #private
