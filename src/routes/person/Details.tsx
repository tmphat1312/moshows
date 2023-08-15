import { getGenderFromNumber } from "../../services/constantMap"
import { APISinglePersonResult } from "../../types/API"
import SocialMedia from "./SocialMedia"

function Details({ item }: DetailsProps) {
  const gender = getGenderFromNumber(item.gender)

  return (
    <section className="@container">
      <h3 className="mb-6 title">Additional Info</h3>
      <div className="@[312px]:grid-cols-2 grid grid-cols-1 gap-2 place-content-start">
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
            <ul className="space-y-1 overflow-auto">
              {item.also_known_as.map((name) => (
                <li
                  key={name}
                  className="px-1 rounded-sm bg-gradient-to-r from-primary-600 to-primary-700 w-fit"
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
      </div>
    </section>
  )
}

export type DetailsProps = {
  item: APISinglePersonResult
}

export default Details
