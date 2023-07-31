import BackgroundWall from "../../components/BackgroundWall"
import CustomScrollingCarousel from "../../components/CustomScrollingCarousel"
import { useFetch } from "../../hooks/useFetch"
import {
  APIProviderResults,
  APIRegionResults,
  APIResponse,
} from "../../types/API"
import ProvidersShowcase from "./ProvidersShowcase"

// TODO: implement skeleton loading

function BrowseMore() {
  const movieProvidersResp = useFetch<APIResponse<APIProviderResults>>(
    `watch/providers/movie`
  )
  const availableRegionsResp = useFetch<APIResponse<APIRegionResults>>(
    `watch/providers/regions`
  )

  if (
    movieProvidersResp.status == "pending" ||
    availableRegionsResp.status == "pending" ||
    !movieProvidersResp.data ||
    !availableRegionsResp.data
  ) {
    return <p>loading...</p>
  }

  if (movieProvidersResp.error || availableRegionsResp.error) {
    return <p>error</p>
  }

  const prioritizedMovieProviders = movieProvidersResp.data.results
    .slice(0, 10)
    .sort((a, b) => a.display_priority - b.display_priority)
  const alphabetizedRegions = availableRegionsResp.data.results.sort((a, b) =>
    a.english_name.localeCompare(b.english_name)
  )

  return (
    <section className="space-y-12 section">
      <h2 className="px-2 mx-auto text-center title ">
        A variety of trailers, all of what you're looking for
      </h2>
      <div className="grid items-center grid-cols-1 gap-16 text-center md:grid-cols-2">
        <div className="space-y-10">
          <ProvidersShowcase
            title="from prestigious providers"
            providers={prioritizedMovieProviders}
          />
          <section>
            <h3 className="subtitle">Including your region</h3>
            <CustomScrollingCarousel>
              {alphabetizedRegions.map((region) => (
                <div
                  className="flex flex-col items-center justify-center w-32 py-4 my-4 rounded-md bg-slate-200 text-slate-900"
                  key={region.iso_3166_1}
                >
                  <h6>{region.english_name}</h6>
                  <hr className="bg-black w-full h-[1px]" />
                  <p>{region.native_name}</p>
                </div>
              ))}
            </CustomScrollingCarousel>
          </section>
        </div>
        <BackgroundWall>
          <div className="space-y-4 text-center">
            <h3 className="subtitle">
              Sound somewhat interesting, you can discover more to find your
              way!!!
            </h3>
            <button className="btn btn--primary">browse now</button>
          </div>
        </BackgroundWall>
      </div>
    </section>
  )
}

export default BrowseMore
