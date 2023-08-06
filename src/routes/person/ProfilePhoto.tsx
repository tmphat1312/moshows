import NoPoster from "../../components/NoPoster"

const BASE_1X_URL = import.meta.env.VITE_TMDB_POS_1X_BASE_URL
const BASE_2X_URL = import.meta.env.VITE_TMDB_POS_2X_BASE_URL

function ProfilePhoto({ profilePath }: ProfilePhotoProps) {
  return (
    <div className="max-w-[240px] md:max-w-[300px]">
      {profilePath ? (
        <img
          src={`${BASE_1X_URL}${profilePath}`}
          srcSet={`${BASE_1X_URL}${profilePath} 1x, ${BASE_2X_URL}${profilePath} 2x`}
          alt="poster image"
          className={`${imageClasses} object-cover w-full`}
        />
      ) : (
        <div className={imageClasses}>
          <NoPoster />
        </div>
      )}
    </div>
  )
}

const imageClasses = "rounded-md border-[1px] border-slate-50/30"

export type ProfilePhotoProps = {
  profilePath: string
}

export default ProfilePhoto
