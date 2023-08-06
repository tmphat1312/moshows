import { APISinglePersonResult } from "../../types/API"

function Info({ item }: InfoProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-3xl">{item.name}</h2>
      <section className="space-y-2">
        <h4 className="text-xl">Biography</h4>
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
    </section>
  )
}

export type InfoProps = {
  item: APISinglePersonResult
}

export default Info
