import { useParams } from "react-router-dom"
import { APICreditResults } from "../../types/API"
import { SingleShowCaseParams } from "./SingleShowcase"
import { useFetch } from "../../hooks/useFetch"
import NoImage from "../../components/NoImage"

const BASE_URL = import.meta.env.VITE_TMDB_CAST_BASE_URL

function Credits() {
  const { type, id } = useParams<SingleShowCaseParams>()
  const { data, error, status } = useFetch<APICreditResults>(
    `${type}/${id}/credits`
  )

  if (error) {
    return <>error</>
  }

  if (status == "pending" || !data) {
    return <>loading</>
  }

  const { cast, crew } = data
  const directors = crew.filter((member) => member.job === "Director")
  const writers = crew.filter(
    (member) => member.known_for_department === "Writing"
  )
  const writersContent = writers.map((writer) => writer.name).join(", ")
  const directorsContent = directors.map((director) => director.name).join(", ")

  return (
    <div className="space-y-4">
      <div className="flex justify-center gap-8 my-2 capitalize">
        <div>
          <h5>director: </h5>
          {directorsContent == "" ? "N/A" : directorsContent}
        </div>
        <div>
          <h5>writer: </h5>
          {writersContent == "" ? "N/A" : writersContent}
        </div>
      </div>
      <hr />
      <section>
        <h3 className="text-2xl text-center text-gradient-primary">Cast</h3>
        <ul className="flex gap-4 overflow-auto">
          {cast.map((member) => (
            <li
              key={member.id}
              className="my-4 overflow-hidden text-center rounded-md w-36 md:w-40 shrink-0 bg-gradient-to-r from-slate-600 to-slate-700"
            >
              {member.profile_path ? (
                <img
                  src={`${BASE_URL}${member.profile_path}`}
                  alt={member.name}
                  className="object-cover w-36 md:w-40 aspect-square"
                />
              ) : (
                <div className="w-36 md:w-40 aspect-square">
                  <NoImage />
                </div>
              )}
              <h5 className="text-balance line-clamp-2">{member.name}</h5>
              <p>{member.character}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Credits
