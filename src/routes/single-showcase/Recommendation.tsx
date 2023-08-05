import { useParams } from "react-router-dom"
import CommonErrorMessage from "../../components/CommonErrorMessage"
import CustomScrollingCarousel from "../../components/CustomScrollingCarousel"
import ItemCard, { ItemCardSkeleton } from "../../components/ItemCard"
import { useFetch } from "../../hooks/useFetch"
import { APIResponse, APIResults } from "../../types/API"
import BackgroundWall from "../../components/BackgroundWall"

function Recommendation() {
  const { id, type } = useParams<{ id: string; type: string }>()
  const { data, status, error } = useFetch<APIResponse<APIResults>>(
    `/${type}/${id}/recommendations`
  )

  if (error) {
    return (
      <section>
        <h2 className="title">Recommendation</h2>
        <CommonErrorMessage />
      </section>
    )
  }

  const carouselContent =
    status == "pending" || !data ? (
      <CustomScrollingCarousel>
        <ItemCardSkeleton />
        <ItemCardSkeleton />
        <ItemCardSkeleton />
        <ItemCardSkeleton />
        <ItemCardSkeleton />
        <ItemCardSkeleton />
        <ItemCardSkeleton />
      </CustomScrollingCarousel>
    ) : (
      <CustomScrollingCarousel>
        {data.results.map((item) => (
          <ItemCard key={item.id} item={item} type={type as "tv" | "movie"} />
        ))}
      </CustomScrollingCarousel>
    )

  // TODO: NO videos found

  return (
    <section>
      <BackgroundWall>
        <h2 className="title">Recommendation</h2>
        {carouselContent}
      </BackgroundWall>
    </section>
  )
}

export default Recommendation
