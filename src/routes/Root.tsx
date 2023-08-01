import { Outlet } from "react-router-dom"
import Header from "../layout/Header"
import Footer from "../layout/Footer"

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
    </>
  )
}

export default Root
