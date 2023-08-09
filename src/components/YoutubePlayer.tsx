function YoutubePlayer({ videoKey }: YoutubePlayerProps) {
  return (
    <iframe
      allowFullScreen
      className="w-[90vw] max-w-5xl aspect-video"
      src={"https://www.youtube.com/embed/" + videoKey}
    />
  )
}

type YoutubePlayerProps = {
  videoKey: string
}

export default YoutubePlayer
