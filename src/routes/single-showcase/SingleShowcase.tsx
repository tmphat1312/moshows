import { useParams } from "react-router-dom"
import BackgroundWall from "../../components/BackgroundWall"
import CommonErrorMessage from "../../components/CommonErrorMessage"
import { SkeletonBox } from "../../components/Skeleton"
import { useFetch } from "../../hooks/useFetch"
import { NavBarPlaceholder } from "../../layout/NavBar"
import NoResources from "../../layout/NoResources"
import { SingleShowcaseParams, isShowcaseType } from "../../services/helpers"
import { APISingleMovieResult, APISingleTVResult } from "../../types/API"
import MovieShowcase from "./MovieShowcase"
import TvShowcase from "./TvShowcase"

export default function SingleShowcase() {
  const { type, id } = useParams<SingleShowcaseParams>()
  if (!isShowcaseType(type)) {
    throw Error(`${type} is not a valid type of showcase`)
  }

  const { data, status } = useFetch<FetchType>(`${type}/${id}`)

  if (status == "pending") {
    return (
      <div className="section">
        <div className="flex flex-col items-center gap-6 py-8 sm:flex-row">
          <div className="shrink-0">
            <SkeletonBox>
              <div className=" w-[240px] md:w-[300px] aspect-[2/3]" />
            </SkeletonBox>
          </div>
          <div className="space-y-2">
            <div className="w-1/2">
              <SkeletonBox>
                <h2 className="invisible text-3xl line-clamp-1">
                  sample name somewhat long
                </h2>
              </SkeletonBox>
            </div>
            <div className="w-1/4">
              <SkeletonBox>
                <p className="invisible">tagline</p>
              </SkeletonBox>
            </div>
            <div className="flex gap-2">
              <SkeletonBox>
                <p className="invisible">xx-xx-xxx</p>
              </SkeletonBox>
              <SkeletonBox>
                <p className="invisible">dot</p>
              </SkeletonBox>
              <SkeletonBox>
                <p className="invisible">minute</p>
              </SkeletonBox>
            </div>
            <div className="w-1/3">
              <SkeletonBox>
                <div className="h-16" />
              </SkeletonBox>
            </div>
            <div className="w-1/2">
              <SkeletonBox>
                <p className="invisible">genres</p>
              </SkeletonBox>
            </div>

            <div className="w-1/12">
              <SkeletonBox>
                <p className="invisible">rating</p>
              </SkeletonBox>
            </div>
            <SkeletonBox>
              <p className="invisible">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Placeat at maiores laudantium suscipit illum veniam amet minus,
                repudiandae illo voluptatibus ex dolores! Doloremque dignissimos
                minima itaque dolores sint, deserunt libero nesciunt, eveniet
                error at, tenetur hic quas quam. Sed molestiae tempora,
                inventore commodi perspiciatis suscipit. Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Eius earum et illo esse
                aliquid velit magnam deleniti voluptate, sit dolorum iure
                maiores! Reprehenderit natus non sequi, explicabo dolore
                recusandae sit perferendis nihil laudantium accusantium
                consectetur repellat eius. Esse eum praesentium nam quasi
                quisquam totam eaque?
              </p>
            </SkeletonBox>
          </div>
        </div>
      </div>
    )
  }

  if (status == "rejected" || data == null) {
    return (
      <>
        <NavBarPlaceholder />
        <BackgroundWall>
          <CommonErrorMessage />
        </BackgroundWall>
      </>
    )
  }

  const showcaseMap = {
    movie: <MovieShowcase data={data as APISingleMovieResult} />,
    tv: <TvShowcase data={data as APISingleTVResult} />,
  }

  return (
    <>
      <div className="section-separator">
        {data ? showcaseMap[type] : <NoResources />}
      </div>
    </>
  )
}

// #private
type FetchType = APISingleMovieResult | APISingleTVResult

// #private
