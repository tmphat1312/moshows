import { BiMoviePlay } from "react-icons/bi"

function Logo() {
  return (
    <a
      href="/"
      className="flex items-center gap-1 text-[1em] font-display text-primary-500"
    >
      <span className="translate-y-[2px]">
        <BiMoviePlay />
      </span>
      MoShows
    </a>
  )
}

export default Logo
