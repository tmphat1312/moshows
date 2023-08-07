import { useParams } from "react-router-dom"
import BackgroundWall from "../../components/BackgroundWall"
import CommonErrorMessage from "../../components/CommonErrorMessage"
import CustomScrollingCarousel from "../../components/CustomScrollingCarousel"
import ItemCard, { ItemCardSkeleton } from "../../components/ItemCard"
import NoItemsMessage from "../../components/NoItemsMessage"
import { SkeletonBox } from "../../components/Skeleton"
import { useFetch } from "../../hooks/useFetch"
import { APIResult } from "../../types/API"
import CareerHistory from "./CareerHistory"

export default function Credits() {
  const { id } = useParams<{ id: string }>()
  const { data, status } = useFetch<FetchType>(`/person/${id}/combined_credits`)

  if (status === "pending") {
    return (
      <div>
        <section className="space-y-2">
          <SkeletonBox>
            <h4 className="invisible title">sample</h4>
          </SkeletonBox>
          <CustomScrollingCarousel>
            {[...Array(5)].map((_, index) => (
              <ItemCardSkeleton key={index} />
            ))}
          </CustomScrollingCarousel>
        </section>
        <section className="my-4 space-y-2">
          <SkeletonBox>
            <h4 className="invisible title">sample</h4>
          </SkeletonBox>
          <SkeletonBox>
            <div className="w-full h-80" />
          </SkeletonBox>
        </section>
      </div>
    )
  }

  if (status == "rejected" || data == null) {
    return (
      <BackgroundWall>
        <CommonErrorMessage />
      </BackgroundWall>
    )
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
    <div>
      <section className="space-y-2">
        <h4 className="text-center title">Known for</h4>
        {uniqueContent.length > 0 ? (
          <CustomScrollingCarousel>
            {uniqueContent.map((item) => (
              <ItemCard key={item.id} item={item} type={item.media_type} />
            ))}
          </CustomScrollingCarousel>
        ) : (
          <NoItemsMessage />
        )}
      </section>
      <section className="my-4 space-y-2">
        <h4 className="text-center title">Acting</h4>
        {uniqueContent.length > 0 ? (
          <CareerHistory items={uniqueContent} />
        ) : (
          <NoItemsMessage />
        )}
      </section>
    </div>
  )
}

// #private
type FetchType = {
  cast: (APIResult & { character: string })[]
  crew: (APIResult & { character: string })[]
  id: number
}
// #private
