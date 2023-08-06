import { APISinglePersonResult } from "../../types/API"

function Info({ item }: InfoProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-4xl">{item.name}</h2>
      <section className="space-y-2">
        <h4 className="px-1 text-xl rounded-sm bg-gradient-to-r w-max from-red-600 to-red-700">
          Biography
        </h4>
        <p className="tracking-wider text-balance">
          {item.biography.length > 0 ? (
            item.biography
          ) : (
            <>
              No biography for <b>{item.name}</b>
            </>
          )}
        </p>
      </section>
      <section className="space-y-2">
        <h4 className="px-1 text-xl rounded-sm bg-gradient-to-r w-max from-red-600 to-red-700">
          Date of birth
        </h4>
        <p>{item.birthday}</p>
      </section>
      <section className="space-y-2">
        <h4 className="px-1 text-xl rounded-sm bg-gradient-to-r w-max from-red-600 to-red-700">
          Place of birth
        </h4>
        <p>{item.place_of_birth}</p>
      </section>
    </section>
  )
}

export type InfoProps = {
  item: APISinglePersonResult
}

export default Info
