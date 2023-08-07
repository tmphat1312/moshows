import { getGenderFromNumber } from "../../services/constantMap"
import { APISinglePersonResult } from "../../types/API"
import SocialMedia from "./SocialMedia"

function Details({ item }: DetailsProps) {
  const gender = getGenderFromNumber(item.gender)

  return (
    <section className="space-y-4">
      <h3 className="title">Additional Info</h3>
      <section>
        <h4>Known for</h4>
        <p className="capitalize">{item.known_for_department}</p>
      </section>
      <section>
        <h4>Gender</h4>
        <p className="capitalize">{gender}</p>
      </section>
      <section>
        <h4>Also known as</h4>
        {item.also_known_as.length > 0 ? (
          <ul className="space-y-1">
            {item.also_known_as.map((name) => (
              <li
                key={name}
                className="px-1 rounded-sm bg-gradient-to-r from-red-600 to-red-700 w-max"
              >
                {name}
              </li>
            ))}
          </ul>
        ) : (
          <p>N/A</p>
        )}
      </section>
      <SocialMedia />
    </section>
  )
}

export type DetailsProps = {
  item: APISinglePersonResult
}

export default Details
