import NoItemsMessage from "../../components/NoItemsMessage"
import PersonCard, { PersonCardSkeleton } from "../../components/PersonCard"
import GridView from "../../layout/GridView"
import { APIPersonResult } from "../../types/API"

export default function PeopleSearchView({ items }: PeopleSearchViewProps) {
  return (
    <GridView>
      {items.length > 0 ? (
        items.map((item) => <PersonCard key={item.id} person={item} />)
      ) : (
        <NoItemsMessage />
      )}
    </GridView>
  )
}

type PeopleSearchViewProps = {
  items: APIPersonResult[]
}

export function PeopleSearchViewSkeleton() {
  return (
    <GridView>
      {Array.from({ length: 20 }).map((_, i) => (
        <PersonCardSkeleton key={i} />
      ))}
    </GridView>
  )
}
