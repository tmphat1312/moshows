import ShowMore from "../../components/ShowMore"
import { APISinglePersonResult } from "../../types/API"

function Info({ item }: InfoProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-4xl">{item.name}</h2>
      <section className="space-y-2">
        <h4 className="px-1 text-lg rounded-sm bg-gradient-to-r w-max from-primary-600 to-primary-700">
          Biography
        </h4>
        {item.biography.length > 0 ? (
          <ShowMore text={item.biography} />
        ) : (
          <p>
            No biography for <b>{item.name}</b>
          </p>
        )}
      </section>
      <section className="space-y-2">
        <h4 className="px-1 text-lg rounded-sm bg-gradient-to-r w-max from-primary-600 to-primary-700">
          Date of birth
        </h4>
        <p>{item.birthday ?? "N/A"}</p>
      </section>
      <section className="space-y-2">
        <h4 className="px-1 text-lg rounded-sm bg-gradient-to-r w-max from-primary-600 to-primary-700">
          Place of birth
        </h4>
        <p>{item.place_of_birth ?? "N/A"}</p>
      </section>
    </section>
  )
}

export type InfoProps = {
  item: APISinglePersonResult
}

export default Info
