import Hero from "../../layout/Hero"
import Trending from "./Trending"

function Landing() {
  return (
    <>
      <Hero />
      <div className="section-separator">
        <Trending />
      </div>
    </>
  )
}

export default Landing
