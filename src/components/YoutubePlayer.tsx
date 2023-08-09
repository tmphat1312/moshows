function YoutubePlayer({ videoKey }: YoutubePlayerProps) {
  return (
    <iframe
      allowFullScreen
      className="portrait:w-[90vw] landscape:w-[60vw] max-w-5xl aspect-video"
      src={"https://www.youtube.com/embed/" + videoKey}
    />
  )
}

type YoutubePlayerProps = {
  videoKey: string
}

export default YoutubePlayer
