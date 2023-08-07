import { Outlet, ScrollRestoration } from "react-router-dom"
import ScrollToTop from "../components/ScrollToTop"
import Footer from "../layout/Footer"
import Header from "../layout/Header"

function Root() {
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
    </>
  )
}

export default Root
