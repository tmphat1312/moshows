import CustomScrollingCarousel from "../../components/CustomScrollingCarousel"
import ProviderCard from "../../components/ProviderCard"
import { SkeletonBox } from "../../components/Skeleton"
import { APIProviderResults } from "../../types/API"

function ProvidersShowcase({ title, providers }: ProvidersShowcaseProps) {
  return (
    <section>
      <h3 className="subtitle">{title}</h3>
      <CustomScrollingCarousel>
        {providers.map((provider) => (
          <div key={provider.provider_id}>
            <ProviderCard provider={provider} />
          </div>
        ))}
      </CustomScrollingCarousel>
    </section>
  )
}

export function ProvidersShowcaseSkeleton() {
  const sampleProvider: APIProviderResults = {
    display_priority: 1,
    logo_path: "sample",
    provider_id: 8,
    provider_name: "sample",
  }

  return (
    <section className="space-y-2">
      <SkeletonBox>
        <h3 className="invisible">this is a sample title for the showcase</h3>
      </SkeletonBox>
      <SkeletonBox>
        <div className="invisible">
          <ProviderCard provider={sampleProvider} />
        </div>
      </SkeletonBox>
    </section>
  )
}

export type ProvidersShowcaseProps = {
  title: string
  providers: APIProviderResults[]
}

export default ProvidersShowcase
