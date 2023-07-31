import { APIProviderResults } from "../types/API"
import { SkeletonBox } from "./Skeleton"

function ProviderCard({ provider }: { provider: APIProviderResults }) {
  return (
    <article className="w-20 my-4 space-y-2 text-center md:w-16 peer-space-x-sm">
      <img
        src={`https://image.tmdb.org/t/p/w500${provider.logo_path}`}
        alt="apple tv"
        className="object-cover w-16 mx-auto border-2 rounded-full md:w-20 aspect-square drop-shadow-lg border-slate-300"
      />
      <h4 className="line-clamp-2 text-balance">{provider.provider_name}</h4>
    </article>
  )
}

export function ProviderCardSkeleton() {
  return (
    <article className="w-20 my-4 space-y-2 text-center md:w-16 peer-space-x-sm">
      <SkeletonBox>
        <div className="w-16 md:w-20 aspect-square drop-shadow-lg"></div>
      </SkeletonBox>
      <SkeletonBox>
        <h4 className="w-16 h-4 mx-auto"></h4>
      </SkeletonBox>
    </article>
  )
}

export default ProviderCard
