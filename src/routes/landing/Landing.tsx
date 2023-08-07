import Hero from "../../layout/Hero"
import BrowseMore from "./BrowseMore"
import Latest from "./Latest"
import Popular from "./Popular"
import Trending from "./Trending"
import TrendingPeople from "./TrendingPeople"

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
        <TrendingPeople />
      </div>
      <BrowseMore />
    </>
  )
}

export default Landing
