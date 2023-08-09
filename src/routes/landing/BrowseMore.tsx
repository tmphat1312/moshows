import CommonErrorMessage from "../../components/CommonErrorMessage"
import { useFetch } from "../../hooks/useFetch"
import DiscoverHint from "../../layout/DiscoverHint"
import { APIProviderResult, APIResponse } from "../../types/API"
import ProvidersShowcase, {
  ProvidersShowcaseSkeleton,
} from "./ProvidersShowcase"

export default function BrowseMore() {
  const { data, status } = useFetch<FetchType>(`watch/providers/movie`)

  if (status == "pending") {
    return (
      <CommonLayout>
        <ProvidersShowcaseSkeleton />
      </CommonLayout>
    )
  }

  if (status == "rejected" || data == null) {
    return (
      <CommonLayout>
        <CommonErrorMessage />
      </CommonLayout>
    )
  }

  const providers = data.results ?? []
  const prioritizedMovieProviders = providers.sort(
    (a, b) => a.display_priority - b.display_priority
  )

  return (
    <CommonLayout>
      {prioritizedMovieProviders.length > 0 ? (
        <ProvidersShowcase
          title="from prestigious providers"
          providers={prioritizedMovieProviders}
        />
      ) : (
        <p>No providers available</p>
      )}
    </CommonLayout>
  )
}

type FetchType = APIResponse<APIProviderResult>

function CommonLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="section">
      <h2 className="mb-8 text-center title">
        A variety of trailers, all of what you're looking for
      </h2>
      <div className="grid items-center grid-cols-1 gap-16 text-center md:grid-cols-2">
        {children}
        <DiscoverHint />
      </div>
    </section>
  )
}
