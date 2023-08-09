import { Outlet, ScrollRestoration } from "react-router-dom"
import Modal from "../components/Modal"
import ScrollToTop from "../components/ScrollToTop"
import VideoPlayer from "../components/VideoPlayer"
import Footer from "../layout/Footer"
import Header from "../layout/Header"
import { useVideoPlayerStore } from "../stores/videoPlayerStore"
import YoutubePlayer from "../components/YoutubePlayer"

function Root() {
  const clearVideoKey = useVideoPlayerStore((state) => state.clearVideoKey)
  const clearVideoId = useVideoPlayerStore((state) => state.clearVideoId)
  const videoKey = useVideoPlayerStore((state) => state.videoKey)
  const videoId = useVideoPlayerStore((state) => state.videoId)

  return (
    <>
      <Header />
      <main className="section-separator">
        <Outlet />
      </main>
      <div className="section-separator">
        <Footer />
      </div>
      <div className="fixed bottom-[8%] right-[4%]">
        <ScrollToTop />
      </div>
      <ScrollRestoration />
      <Modal
        title="trailer player"
        closeAction={clearVideoId}
        controlState={videoId.length > 0}
      >
        <VideoPlayer />
      </Modal>
      <Modal
        title="trailer player"
        closeAction={clearVideoKey}
        controlState={videoKey.length > 0}
      >
        <YoutubePlayer videoKey={videoKey} />
      </Modal>
    </>
  )
}

export default Root
