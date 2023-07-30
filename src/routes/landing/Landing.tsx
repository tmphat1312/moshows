import Hero from "../../layout/Hero"
import Latest from "./Latest"
import Popular from "./Popular"
import Trending from "./Trending"

function Landing() {
  return (
    <>
      <Hero />
      <div className="section-separator">
        <Trending />
        <Latest />
        <Popular />
      </div>
    </>
  )
}

export default Landing
