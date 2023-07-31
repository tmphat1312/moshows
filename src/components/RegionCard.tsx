import { APIRegionResults } from "../types/API"

function RegionCard({ region }: { region: APIRegionResults }) {
  return (
    <article
      className="flex flex-col items-center justify-center w-32 py-4 my-4 rounded-md bg-slate-200 text-slate-900"
      key={region.iso_3166_1}
    >
      <h6>{region.english_name}</h6>
      <hr className="bg-black w-full h-[1px]" />
      <p>{region.native_name}</p>
    </article>
  )
}

export default RegionCard
