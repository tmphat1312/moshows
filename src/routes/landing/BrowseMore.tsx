import CommonErrorMessage from "../../components/CommonErrorMessage"
import { useFetch } from "../../hooks/useFetch"
import DiscoverHint from "../../layout/DiscoverHint"
import {
  APIProviderResults,
  APIRegionResults,
  APIResponse,
} from "../../types/API"
import ProvidersShowcase, {
  ProvidersShowcaseSkeleton,
} from "./ProvidersShowcase"
import RegionsShowcase, { RegionsShowcaseSkeleton } from "./RegionsShowcase"

function BrowseMore() {
  const movieProvidersResp = useFetch<APIResponse<APIProviderResults>>(
    `watch/providers/movie`
  )
  const availableRegionsResp = useFetch<APIResponse<APIRegionResults>>(
    `watch/providers/regions`
  )

  if (movieProvidersResp.error || availableRegionsResp.error) {
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

  let moviesProvidersContent
  if (
    movieProvidersResp.status == "pending" ||
    movieProvidersResp.data === null
  ) {
    moviesProvidersContent = <ProvidersShowcaseSkeleton />
  } else {
    const prioritizedMovieProviders = movieProvidersResp.data.results.sort(
      (a, b) => a.display_priority - b.display_priority
    )

    moviesProvidersContent = (
      <ProvidersShowcase
        title="from prestigious providers"
        providers={prioritizedMovieProviders}
      />
    )
  }

  let regionsContent
  if (
    availableRegionsResp.status == "pending" ||
    availableRegionsResp.data === null
  ) {
    regionsContent = <RegionsShowcaseSkeleton />
  } else {
    const alphabetizedRegions = availableRegionsResp.data.results.sort((a, b) =>
      a.english_name.localeCompare(b.english_name)
    )

    regionsContent = (
      <RegionsShowcase
        title="including your region"
        regions={alphabetizedRegions}
      />
    )
  }

  return (
    <section className="space-y-12 section">
      <h2 className="px-2 mx-auto text-center title ">
        A variety of trailers, all of what you're looking for
      </h2>
      <div className="grid items-center grid-cols-1 gap-16 text-center md:grid-cols-2">
        <div className="space-y-10">
          {moviesProvidersContent}
          {regionsContent}
        </div>
        <DiscoverHint />
      </div>
    </section>
  )
}

export default BrowseMore
