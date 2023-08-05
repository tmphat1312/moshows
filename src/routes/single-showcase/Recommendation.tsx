import { useParams } from "react-router-dom"
import BackgroundWall from "../../components/BackgroundWall"
import CommonErrorMessage from "../../components/CommonErrorMessage"
import CustomScrollingCarousel from "../../components/CustomScrollingCarousel"
import ItemCard, { ItemCardSkeleton } from "../../components/ItemCard"
import { useFetch } from "../../hooks/useFetch"
import { APIResponse, APIResults } from "../../types/API"

function Recommendation() {
  const { id, type } = useParams<{ id: string; type: string }>()
  const { data, status, error } = useFetch<APIResponse<APIResults>>(
    `/${type}/${id}/recommendations`
  )

  if (error) {
    return (
      <section>
        <BackgroundWall>
          <h2 className="title">Recommendation</h2>
          <CommonErrorMessage />
        </BackgroundWall>
      </section>
    )
  }

  if (status == "pending") {
    return (
      <section>
        <h2 className="title">Recommendation</h2>
        <BackgroundWall>
          <CustomScrollingCarousel>
            {Array.from({ length: 7 }).map((_, index) => (
              <ItemCardSkeleton key={index} />
            ))}
          </CustomScrollingCarousel>
        </BackgroundWall>
      </section>
    )
  }

  const recommendationItems = data?.results ?? []
  const content =
    recommendationItems.length > 0 ? (
      <CustomScrollingCarousel>
        {recommendationItems.map((item) => (
          <ItemCard key={item.id} item={item} type={type as "tv" | "movie"} />
        ))}
      </CustomScrollingCarousel>
    ) : (
      <p className="my-6 text-2xl font-display">No items available</p>
    )

  return (
    <section>
      <BackgroundWall>
        <h2 className="title">Recommendation</h2>
        {content}
      </BackgroundWall>
    </section>
  )
}

export default Recommendation
