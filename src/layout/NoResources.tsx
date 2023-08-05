import notFoundImage from "../assets/images/not-found.svg"
import { Link } from "react-router-dom"

function NoResources() {
  return (
    <div className="space-y-8 section">
      <h2 className="text-center title">no resources found</h2>
      <img
        src={notFoundImage}
        alt="no resources found"
        className="mx-auto w-96"
      />
      <Link
        to="/"
        className="block text-2xl text-center underline uppercase hover:text-primary-500"
      >
        back to home
      </Link>
    </div>
  )
}

export default NoResources
