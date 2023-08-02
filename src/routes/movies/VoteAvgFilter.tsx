import { useMovieStore } from "../../stores/movieStore"

function VoteAvgFilter() {
  const setVoteAvg = useMovieStore((state) => state.setVoteAvg)

  return (
    <label htmlFor="vote_average" className="block font-semibold capitalize">
      <span className="">min vote average</span>
      <input
        type="number"
        name="vote_average"
        id="vote_average"
        className="w-full border-0 rounded-md"
        placeholder="0 -> 10"
        inputMode="decimal"
        min={0}
        max={10}
        step={0.1}
        onChange={(e) => setVoteAvg(e.target.valueAsNumber)}
      />
    </label>
  )
}

export default VoteAvgFilter
