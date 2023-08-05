import { useParams } from "react-router-dom"
import CommonErrorMessage from "../../components/CommonErrorMessage"
import CustomScrollingCarousel from "../../components/CustomScrollingCarousel"
import ItemCard, { ItemCardSkeleton } from "../../components/ItemCard"
import { useFetch } from "../../hooks/useFetch"
import { APIResponse, APIResults } from "../../types/API"

function Similar() {
  const { id, type } = useParams<{ id: string; type: string }>()
  const { data, status, error } = useFetch<APIResponse<APIResults>>(
    `/${type}/${id}/similar`
  )

  if (error) {
    return (
      <section className="section">
        <div className="flex-btw">
          <h2 className="title">Similar</h2>
        </div>
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
      <h2 className="title">Similar</h2>
      <div>{carouselContent}</div>
    </section>
  )
}

export default Similar
