function RatingCircle({ rating }: { rating: number }) {
  const deg = 36 * rating
  let ratingPortionColor = `#fdba74 0deg ${deg}deg`

  if (deg > 90 && deg <= 180) {
    ratingPortionColor = `#fdba74, #fb923c`
  } else if (deg > 180 && deg <= 270) {
    ratingPortionColor = `#fdba74, #fb923c, #f97316`
  } else {
    ratingPortionColor = `#fdba74, #fb923c, #f97316, #ea580c`
  }

  const style = {
    background: `conic-gradient(${ratingPortionColor}, #334155 ${deg}deg 360deg)`,
  }

  return (
    <div
      className="grid w-10 rounded-full aspect-square bg-slate-500 text-slate-900 place-content-center"
      style={style}
    >
      <div className="grid w-8 text-xs rounded-full place-content-center aspect-square bg-slate-50">
        {rating.toFixed(1)}
      </div>
    </div>
  )
}

export default RatingCircle
