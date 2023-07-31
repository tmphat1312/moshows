import CustomScrollingCarousel from "../../components/CustomScrollingCarousel"
import ProviderCard from "../../components/ProviderCard"
import { APIProviderResults } from "../../types/API"

function ProvidersShowcase({ title, providers }: ProvidersShowcaseProps) {
  return (
    <section>
      <h3 className="subtitle">{title}</h3>
      <CustomScrollingCarousel>
        {providers.map((provider) => (
          <div className="">
            <ProviderCard key={provider.provider_id} provider={provider} />
          </div>
        ))}
      </CustomScrollingCarousel>
    </section>
  )
}

export type ProvidersShowcaseProps = {
  title: string
  providers: APIProviderResults[]
}

export default ProvidersShowcase
