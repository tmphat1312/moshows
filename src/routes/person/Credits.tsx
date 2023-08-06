import { useParams } from "react-router-dom"
import CustomScrollingCarousel from "../../components/CustomScrollingCarousel"
import ItemCard from "../../components/ItemCard"
import { useFetch } from "../../hooks/useFetch"
import { APIResults } from "../../types/API"
import CareerHistory from "./CareerHistory"

function Credits() {
  const { id } = useParams<{ id: string }>()
  const { data, status, error } = useFetch<{
    cast: (APIResults & { character: string })[]
    crew: (APIResults & { character: string })[]
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
  const uniqueContent = content.filter(
    (item, index, self) =>
      index ===
      self.findIndex(
        (t) => t.id === item.id && t.media_type === item.media_type
      )
  )

  return (
    <>
      <section className="space-y-2">
        <h4 className="text-center title">Known for</h4>
        <CustomScrollingCarousel>
          {uniqueContent.map((item) => (
            <ItemCard
              key={item.id + item.media_type + item.overview}
              item={item}
              type={item.media_type}
            />
          ))}
        </CustomScrollingCarousel>
      </section>
      <section className="my-4 space-y-2">
        <h4 className="text-center title">Acting</h4>
        <CareerHistory items={uniqueContent} />
      </section>
    </>
  )
}

export default Credits
