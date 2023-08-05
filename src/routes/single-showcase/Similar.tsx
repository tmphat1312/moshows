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
        <h2 className="title">Similar</h2>
        <CommonErrorMessage />
      </section>
    )
  }

  if (status == "pending") {
    return (
      <section className="section">
        <h2 className="title">Similar</h2>
        <CustomScrollingCarousel>
          {Array.from({ length: 7 }).map((_, index) => (
            <ItemCardSkeleton key={index} />
          ))}
          <ItemCardSkeleton />
        </CustomScrollingCarousel>
      </section>
    )
  }

  const similarItems = data?.results ?? []
  const content =
    similarItems.length > 0 ? (
      <CustomScrollingCarousel>
        {similarItems.map((item) => (
          <ItemCard key={item.id} item={item} type={type as "tv" | "movie"} />
        ))}
      </CustomScrollingCarousel>
    ) : (
      <p className="my-6 text-2xl font-display">No items available</p>
    )

  return (
    <section>
      <h2 className="title">Similar</h2>
      <div>{content}</div>
    </section>
  )
}

export default Similar
