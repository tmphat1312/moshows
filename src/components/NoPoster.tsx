import noPoster from "../assets/images/no-poster.webp"

function NoPoster() {
  return (
    <img
      loading="lazy"
      className="object-cover w-full filter grayscale"
      src={noPoster}
      alt="no poster"
      decoding="async"
    />
  )
}

export default NoPoster
