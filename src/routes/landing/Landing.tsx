import Hero from "../../layout/Hero"
import Latest from "./Latest"
import Trending from "./Trending"

function Landing() {
  return (
    <>
      <Hero />
      <div className="section-separator">
        <Trending />
        <Latest />
      </div>
    </>
  )
}

export default Landing
