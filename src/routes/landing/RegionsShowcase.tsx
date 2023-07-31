import CustomScrollingCarousel from "../../components/CustomScrollingCarousel"
import RegionCard from "../../components/RegionCard"
import { SkeletonBox } from "../../components/Skeleton"
import { APIRegionResults } from "../../types/API"

function RegionsShowcase({ regions, title }: RegionsShowcaseProps) {
  return (
    <section>
      <h3 className="subtitle">{title}</h3>
      <CustomScrollingCarousel>
        {regions.map((region) => (
          <RegionCard key={region.iso_3166_1} region={region} />
        ))}
      </CustomScrollingCarousel>
    </section>
  )
}

export function RegionsShowcaseSkeleton() {
  return (
    <section className="space-y-2">
      <SkeletonBox>
        <h3 className="invisible">this is a sample title for the showcase</h3>
      </SkeletonBox>
      <SkeletonBox>
        <div className="invisible">
          <RegionCard
            region={{
              english_name: "sample",
              iso_3166_1: "sample",
              native_name: "sample",
            }}
          />
        </div>
      </SkeletonBox>
    </section>
  )
}

export type RegionsShowcaseProps = {
  title: string
  regions: APIRegionResults[]
}

export default RegionsShowcase
