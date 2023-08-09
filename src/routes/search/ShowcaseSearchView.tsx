import ItemCard, { ItemCardSkeleton } from "../../components/ItemCard"
import NoItemsMessage from "../../components/NoItemsMessage"
import GridView from "../../layout/GridView"
import { APIResult } from "../../types/API"

export default function ShowcaseSearchView({
  items,
  type,
}: ShowcaseSearchViewProps) {
  return (
    <GridView>
      {items.length > 0 ? (
        items.map((item) => <ItemCard key={item.id} item={item} type={type} />)
      ) : (
        <NoItemsMessage />
      )}
    </GridView>
  )
}

type ShowcaseSearchViewProps = {
  items: APIResult[]
  type: "movie" | "tv"
}

export function ShowcaseSearchViewSkeleton() {
  return (
    <GridView>
      {Array.from({ length: 20 }).map((_, i) => (
        <ItemCardSkeleton key={i} />
      ))}
    </GridView>
  )
}
