function VoteAvgFilter({ setVoteAvg }: VoteAvgFilterProps) {
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
        aria-description="min vote average from 0 to 10"
        onChange={(e) => {
          const vote = e.target.valueAsNumber

          if (vote >= 0 && vote <= 10) setVoteAvg(vote)
          else {
            if (e.target.value != "") e.target.value = "10"
            setVoteAvg(10)
          }
        }}
      />
    </label>
  )
}

export type VoteAvgFilterProps = {
  setVoteAvg: (value: number) => void
}

export default VoteAvgFilter
