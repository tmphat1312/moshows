import { Outlet } from "react-router-dom"
import Header from "../layout/Header"
import Footer from "../layout/Footer"
import ScrollToTop from "../components/ScrollToTop"

function Root() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <div className="section-separator">
        <Footer />
      </div>
      <div className="fixed bottom-[8%] right-[4%]">
        <ScrollToTop />
      </div>
    </>
  )
}

export default Root
