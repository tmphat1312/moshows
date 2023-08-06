import { useParams } from "react-router-dom"
import CustomScrollingCarousel from "../../components/CustomScrollingCarousel"
import { useFetch } from "../../hooks/useFetch"
import { APIResults } from "../../types/API"
import ItemCard from "../../components/ItemCard"

function Credits() {
  const { id } = useParams<{ id: string }>()
  const { data, status, error } = useFetch<{
    cast: APIResults[]
    crew: APIResults[]
    id: number
  }>(`/person/${id}/combined_credits`)

  if (status === "rejected") {
    return <div>There was an error: {error?.message}</div>
  }

  if (status === "pending") {
    return <div>Loading...</div>
  }

  if (data == null) {
    return <div>Person credit not found</div>
  }

  const content = [...data.cast, ...data.crew]

  return (
    <section className="space-y-2">
      <h4 className="text-center title">Known for</h4>
      <CustomScrollingCarousel>
        {content.map((item) => (
          <ItemCard key={item.id} item={item} type={item.media_type} />
        ))}
      </CustomScrollingCarousel>
    </section>
  )
}

export default Credits
