import { useState } from "react"
import { APISinglePersonResult } from "../../types/API"

const BIO_LENGTH = 500

function Info({ item }: InfoProps) {
  const [showMore, setShowMore] = useState(false)
  const biography = item.biography.slice(0, BIO_LENGTH)
  const bioLength = item.biography.length

  const bioContent = (
    <>
      {biography}
      {bioLength > BIO_LENGTH && !showMore && <>...</>}
      {showMore && <>{item.biography.slice(500, bioLength)}</>}
      {bioLength > BIO_LENGTH && (
        <button
          className="px-2 text-primary-500 hover:underline font-display"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "show less" : "show more"}
        </button>
      )}
    </>
  )

  return (
    <section className="space-y-4">
      <h2 className="text-4xl">{item.name}</h2>
      <section className="space-y-2">
        <h4 className="px-1 text-lg rounded-sm bg-gradient-to-r w-max from-primary-600 to-primary-700">
          Biography
        </h4>
        <p className="tracking-wider text-balance">
          {item.biography.length > 0 ? (
            <>{bioContent}</>
          ) : (
            <>
              No biography for <b>{item.name}</b>
            </>
          )}
        </p>
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
