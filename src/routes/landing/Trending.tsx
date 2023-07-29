// import { useState } from "react"
// import { useFetch } from "../../hooks/useFetch"
import { useState } from "react"
import CustomScrollingCarousel from "../../components/CustomScrollingCarousel"
import ItemCard, { ItemCardProps } from "../../components/ItemCard"
import { useFetch } from "../../hooks/useFetch"

// TODO: extract API types to a separate file
export type TrendingAPIResponse = {
  page: number
  results: ItemCardProps[]
  total_pages: number
  total_results: number
}

function Trending() {
  const [timeWindow] = useState<"day" | "week">("day")
  const { data, status, error } = useFetch<TrendingAPIResponse>(
    `/trending/all/${timeWindow}`
  )

  if (status == "pending") {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <section className="section">
      <h2 className="title">Trending</h2>
      <CustomScrollingCarousel>
        {data?.results.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </CustomScrollingCarousel>
    </section>
  )
}

export default Trending
