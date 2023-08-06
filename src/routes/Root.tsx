import { Outlet } from "react-router-dom"
import Header from "../layout/Header"
import Footer from "../layout/Footer"
import ScrollToTop from "../components/ScrollToTop"
import { NavBarPlaceholder } from "../layout/NavBar"

function Root() {
  return (
    <>
      <Header />
      <NavBarPlaceholder />
      <main className="section-separator">
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
