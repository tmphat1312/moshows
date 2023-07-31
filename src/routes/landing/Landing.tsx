import Footer from "../../layout/Footer"
import Hero from "../../layout/Hero"
import BrowseMore from "./BrowseMore"
import Latest from "./Latest"
import Popular from "./Popular"
import PopularPeople from "./PopularPeople"
import Trending from "./Trending"

function Landing() {
  return (
    <>
      <div className="section-separator">
        <Hero />
      </div>
      <div className="section-separator">
        <Trending />
        <Latest />
        <Popular />
        <PopularPeople />
      </div>
      <div className="section-separator">
        <BrowseMore />
      </div>
      <div className="section-separator">
        <Footer />
      </div>
    </>
  )
}

export default Landing
