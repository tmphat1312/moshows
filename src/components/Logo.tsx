import { BiMoviePlay } from "react-icons/bi"

function Logo() {
  return (
    <a
      href="/"
      className="flex items-center text-[0.8em] sm:text-[1em] font-display text-gradient-primary"
    >
      <span className="translate-y-[1px] text-primary-500">
        <BiMoviePlay />
      </span>
      MoShows
    </a>
  )
}

export default Logo
