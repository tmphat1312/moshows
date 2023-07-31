import { useState } from "react"
import { BiWindowClose } from "react-icons/bi"
import { FaListUl } from "react-icons/fa"
import { SiQuicklook } from "react-icons/si"
import FloatNavigation from "../components/FloatNavigation"
import FloatSearchForm from "../components/FloatSearchForm"
import Logo from "../components/Logo"
import Navigation from "../components/Navigation"
import SearchForm from "../components/SearchForm"

function NavBar() {
  const [shownStatus, setShownStatus] = useState<"none" | "search" | "nav">(
    "none"
  )

  function toggleNavFloat() {
    if (shownStatus == "nav") {
      setShownStatus("none")
    } else {
      setShownStatus("nav")
    }
  }

  function toggleSearchFloat() {
    if (shownStatus == "search") {
      setShownStatus("none")
    } else {
      setShownStatus("search")
    }
  }

  return (
    <nav className="gap-8 py-4 mx-auto flex-btw-center app-width">
      <div className="text-3xl">
        <Logo />
      </div>
      <div className="hidden max-w-lg lg:block grow">
        <SearchForm />
      </div>
      <div className="hidden sm:block">
        <Navigation />
      </div>
      <div className="block sm:hidden">
        {shownStatus == "nav" && <FloatNavigation />}
      </div>
      <div className="lg:hidden">
        {shownStatus == "search" && <FloatSearchForm />}
      </div>
      <div className="flex items-center gap-6 lg:hidden">
        <button
          className="text-2xl transition-all lg:hidden text-primary-600 hover:scale-105 hover:text-primary-400"
          onClick={toggleSearchFloat}
        >
          {shownStatus == "search" ? <BiWindowClose /> : <SiQuicklook />}
        </button>
        <button
          className="text-2xl transition-all sm:hidden text-primary-600 hover:scale-105 hover:text-primary-400"
          onClick={toggleNavFloat}
        >
          {shownStatus == "nav" ? <BiWindowClose /> : <FaListUl />}
        </button>
      </div>
    </nav>
  )
}

export default NavBar
