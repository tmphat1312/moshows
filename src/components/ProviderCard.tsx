import { APIProviderResults } from "../types/API"

function ProviderCard({ provider }: { provider: APIProviderResults }) {
  return (
    <article className="w-20 my-4 space-y-2 text-center md:w-16 ">
      <img
        src={`https://image.tmdb.org/t/p/w500${provider.logo_path}`}
        alt="apple tv"
        className="object-cover w-16 mx-auto border-2 rounded-full md:w-20 aspect-square drop-shadow-lg border-slate-300"
      />
      <h4 className="line-clamp-2 text-balance">{provider.provider_name}</h4>
    </article>
  )
}

export default ProviderCard
