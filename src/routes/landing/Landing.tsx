import Hero from "../../layout/Hero"
import BrowseMore from "./BrowseMore"
import Latest from "./Latest"
import Popular from "./Popular"
import PopularPeople from "./PopularPeople"
import Trending from "./Trending"

function Landing() {
  return (
    <>
      <Hero />
      <div className="section-separator">
        <Trending />
        <Latest />
        <Popular />
        <PopularPeople />
        <div className="section-separator">
          <BrowseMore />
        </div>
      </div>
    </>
  )
}

export default Landing
