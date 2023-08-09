import { BiMoviePlay } from "react-icons/bi"
import { Link } from "react-router-dom"

function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center text-[0.8em] sm:text-[1em] font-display text-gradient-primary"
    >
      <span className="translate-y-[1px] text-primary-500">
        <BiMoviePlay />
      </span>
      MoShows
    </Link>
  )
}

export default Logo
