import CommonErrorMessage from "../../components/CommonErrorMessage"
import { useFetch } from "../../hooks/useFetch"
import DiscoverHint from "../../layout/DiscoverHint"
import { APIProviderResults, APIResponse } from "../../types/API"
import ProvidersShowcase, {
  ProvidersShowcaseSkeleton,
} from "./ProvidersShowcase"

function BrowseMore() {
  const movieProvidersResp = useFetch<APIResponse<APIProviderResults>>(
    `watch/providers/movie`
  )

  if (movieProvidersResp.error) {
    return (
      <section className="section">
        <h2 className="px-2 mx-auto text-center title ">
          A variety of trailers, all of what you're looking for
        </h2>
        <CommonErrorMessage />
        <DiscoverHint />
      </section>
    )
  }

  const providers = movieProvidersResp.data?.results ?? []
  let moviesProvidersContent
  if (movieProvidersResp.status == "pending") {
    moviesProvidersContent = <ProvidersShowcaseSkeleton />
  } else {
    const prioritizedMovieProviders = providers.sort(
      (a, b) => a.display_priority - b.display_priority
    )

    moviesProvidersContent =
      prioritizedMovieProviders.length > 0 ? (
        <ProvidersShowcase
          title="from prestigious providers"
          providers={prioritizedMovieProviders}
        />
      ) : (
        <p>No providers available</p>
      )
  }

  return (
    <section className="space-y-12 section">
      <h2 className="px-2 mx-auto text-center title ">
        A variety of trailers, all of what you're looking for
      </h2>
      <div className="grid items-center grid-cols-1 gap-16 text-center md:grid-cols-2">
        {moviesProvidersContent}
        <DiscoverHint />
      </div>
    </section>
  )
}

export default BrowseMore
