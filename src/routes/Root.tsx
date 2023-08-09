import { Outlet, ScrollRestoration } from "react-router-dom"
import Modal from "../components/Modal"
import ScrollToTop from "../components/ScrollToTop"
import VideoPlayer from "../components/VideoPlayer"
import Footer from "../layout/Footer"
import Header from "../layout/Header"
import { useVideoPlayerStore } from "../stores/videoPlayerStore"

function Root() {
  const videoId = useVideoPlayerStore((state) => state.videoId)
  const clearVideoId = useVideoPlayerStore((state) => state.clearVideoId)

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
        title="title content"
        closeAction={clearVideoId}
        controlState={videoId.length > 0}
      >
        <VideoPlayer />
      </Modal>
    </>
  )
}

export default Root
