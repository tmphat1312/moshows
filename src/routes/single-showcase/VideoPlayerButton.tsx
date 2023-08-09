import PlayButton from "../../components/PlayButton"
import { useVideoPlayerStore } from "../../stores/videoPlayerStore"

function VideoPlayerButton({ id, type }: VideoPlayerButtonProps) {
  const setVideoId = useVideoPlayerStore((state) => state.setVideoId)
  const setType = useVideoPlayerStore((state) => state.setType)

  function playAction() {
    setVideoId(id)
    setType(type)
  }

  return (
    <div className="flex items-center gap-8">
      <h6 className="text-xl">Play trailer{" >>"}</h6>
      <div className="inline-flex p-1 ring-[2px] hover:ring-0 rounded-full ring-slate-50">
        <PlayButton playAction={playAction} />
      </div>
    </div>
  )
}

type VideoPlayerButtonProps = {
  id: string
  type: string
}
export default VideoPlayerButton
