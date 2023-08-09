import { Link } from "react-router-dom"
import BackgroundWall from "../components/BackgroundWall"

function DiscoverHint() {
  return (
    <BackgroundWall>
      <div className="space-y-4 text-center">
        <h3 className="subtitle">
          Sound somewhat interesting, you can discover more to find your way!!!
        </h3>
        <Link to="/people" className="btn btn--primary">
          browse cast
        </Link>
      </div>
    </BackgroundWall>
  )
}

export default DiscoverHint
