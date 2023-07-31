import { APIProviderResults } from "../types/API"

const PROVIDER_LOGO_BASE_URL = import.meta.env.VITE_TMDB_PD_BASE_URL

function ProviderCard({ provider }: { provider: APIProviderResults }) {
  return (
    <article className="w-20 my-4 space-y-2 text-center md:w-16 ">
      <img
        src={`${PROVIDER_LOGO_BASE_URL}${provider.logo_path}`}
        alt={provider.provider_name}
        className="object-cover w-16 mx-auto border-2 rounded-full md:w-20 aspect-square drop-shadow-lg"
      />
      <h4 className="line-clamp-2 text-balance">{provider.provider_name}</h4>
    </article>
  )
}

export default ProviderCard
