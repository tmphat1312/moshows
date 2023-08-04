import noPoster from "../../assets/images/no-poster.webp"

const BASE_1X_URL = import.meta.env.VITE_TMDB_POS_1X_BASE_URL
const BASE_2X_URL = import.meta.env.VITE_TMDB_POS_2X_BASE_URL

function Poster({ adult, posterPath }: PosterProps) {
  return (
    <div className="max-w-[240px] md:max-w-[300px] relative">
      {posterPath ? (
        <img
          src={`${BASE_1X_URL}${posterPath}`}
          srcSet={`${BASE_1X_URL}${posterPath} 1x, ${BASE_2X_URL}${posterPath} 2x`}
          alt="poster image"
          className={imageClasses}
        />
      ) : (
        <img
          loading="lazy"
          className={`${imageClasses} filter grayscale`}
          src={noPoster}
          alt="no poster"
          decoding="async"
        />
      )}
      {adult && (
        <div className="absolute top-0 right-0 font-bold text-black bg-white">
          18+
        </div>
      )}
    </div>
  )
}

const imageClasses =
  "object-cover w-full rounded-md border-[1px] border-slate-50/30"

export type PosterProps = {
  posterPath: string
  adult: boolean
}

export default Poster
