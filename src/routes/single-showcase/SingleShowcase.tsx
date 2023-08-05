import { useParams } from "react-router-dom"
import BackgroundWall from "../../components/BackgroundWall"
import CommonErrorMessage from "../../components/CommonErrorMessage"
import { useFetch } from "../../hooks/useFetch"
import { NavBarPlaceholder } from "../../layout/NavBar"
import NoResources from "../../layout/NoResources"
import { SingleShowcaseParams, isShowcaseType } from "../../services/helpers"
import { APISingleMovieResult, APISingleTVResult } from "../../types/API"
import MovieShowcase from "./MovieShowcase"
import TvShowcase from "./TvShowcase"

function SingleShowcase() {
  const { type, id } = useParams<SingleShowcaseParams>()
  if (!isShowcaseType(type)) {
    throw Error(`${type} is not a valid type of showcase`)
  }

  const { data, error, status } = useFetch<
    APISingleMovieResult | APISingleTVResult
  >(`${type}/${id}`)

  if (error) {
    return (
      <>
        <NavBarPlaceholder />
        <BackgroundWall>
          <CommonErrorMessage />
        </BackgroundWall>
      </>
    )
  }

  if (status == "pending") {
    return (
      <>
        <NavBarPlaceholder />

        <BackgroundWall>
          <p className="text-2xl">Loading skeleton...</p>
        </BackgroundWall>
      </>
    )
  } // TODO: add skeleton

  const showcaseMap = {
    movie: <MovieShowcase data={data as APISingleMovieResult} />,
    tv: <TvShowcase data={data as APISingleTVResult} />,
  }

  return (
    <>
      <NavBarPlaceholder />
      <div className="section-separator">
        {data ? showcaseMap[type] : <NoResources />}
      </div>
    </>
  )
}

export default SingleShowcase
