import { useParams } from "react-router-dom"
import CommonErrorMessage from "../../components/CommonErrorMessage"
import { useFetch } from "../../hooks/useFetch"
import { NavBarPlaceholder } from "../../layout/NavBar"
import { APISinglePersonResult } from "../../types/API"
import Credits from "./Credits"
import Details from "./Details"
import Info from "./Info"
import ProfilePhoto from "./ProfilePhoto"
import { SkeletonBox } from "../../components/Skeleton"

export default function Person() {
  const { id } = useParams<{ id: string }>()
  const { data, status } = useFetch<APISinglePersonResult>(`/person/${id}`)

  if (status === "pending") {
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
            <div className="w-1/6">
              <SkeletonBox>
                <p className="invisible">bio</p>
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
            <div className="w-1/6">
              <SkeletonBox>
                <p className="invisible">dob</p>
              </SkeletonBox>
            </div>
            <div className="w-1/5">
              <SkeletonBox>
                <p className="invisible">xx-xx-xxx</p>
              </SkeletonBox>
            </div>
            <div className="w-1/6">
              <SkeletonBox>
                <p className="invisible">pob</p>
              </SkeletonBox>
            </div>
            <div className="w-1/4">
              <SkeletonBox>
                <p className="invisible">log angles</p>
              </SkeletonBox>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (status == "rejected" || data == null) {
    return (
      <CommonLayout>
        <CommonErrorMessage />
      </CommonLayout>
    )
  }

  return (
    <CommonLayout>
      <div className="flex items-center gap-8">
        <div className="w-1/4 shrink-0">
          <ProfilePhoto profilePath={data.profile_path} />
        </div>
        <div className="grow">
          <Info item={data} />
        </div>
      </div>
      <div className="flex gap-8">
        <div className="w-1/4">
          <Details item={data} />
        </div>
        <div className="w-3/4">
          <Credits />
        </div>
      </div>
    </CommonLayout>
  )
}

// #private
function CommonLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBarPlaceholder />
      <section className="space-y-16 section">{children}</section>
    </>
  )
}
// #private
