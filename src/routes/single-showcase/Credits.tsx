import { useParams } from "react-router-dom"
import BackgroundWall from "../../components/BackgroundWall"
import CommonErrorMessage from "../../components/CommonErrorMessage"
import { useFetch } from "../../hooks/useFetch"
import { SingleShowcaseParams } from "../../services/helpers"
import { APICreditResults } from "../../types/API"
import Cast from "./Cast"

function Credits() {
  const { type, id } = useParams<SingleShowcaseParams>()
  const { data, error, status } = useFetch<APICreditResults>(
    `${type}/${id}/credits`
  )

  if (error) {
    return (
      <BackgroundWall>
        <CommonErrorMessage />
      </BackgroundWall>
    )
  }

  if (status == "pending") {
    return <>loading</>
  } // TODO: add skeleton

  if (!data) {
    return <h4 className="text-center text-red-500">Credits unavailable</h4>
  }

  const { cast, crew } = data
  const directors = crew.filter(
    (member) => member.known_for_department === "Directing"
  )
  const writers = crew.filter(
    (member) => member.known_for_department === "Writing"
  )
  const writersContent = writers.map((writer) => writer.name).join(", ")
  const directorsContent = directors.map((director) => director.name).join(", ")

  return (
    <div className="space-y-4">
      <div className="flex justify-center gap-8 my-2 capitalize">
        <div>
          <h5>directing: </h5>
          {directorsContent == "" ? "N/A" : directorsContent}
        </div>
        <div>
          <h5>writing: </h5>
          {writersContent == "" ? "N/A" : writersContent}
        </div>
      </div>
      <hr />
      <Cast cast={cast} />
    </div>
  )
}

export default Credits
