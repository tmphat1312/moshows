import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom"
import notfoundImg from "../assets/images/not-found.svg"

function PageNotFound() {
  const error = useRouteError()

  let errorText = "Error"
  let errorMessage = "There was an error occurred"

  if (isRouteErrorResponse(error)) {
    errorText = error.statusText
    errorMessage = error.data
  } else if (error instanceof Error) {
    errorMessage = error.message
  }

  return (
    <main className="flex-col gap-8 text-center flex-center min-h-dvh app-width">
      <h1 className="text-5xl">{errorText}</h1>
      <img
        src={notfoundImg}
        alt="Two men search for nothing"
        className="w-1/2"
      />
      <h2 className="text-2xl">{errorMessage}</h2>
      <Link
        to="/"
        className="font-bold tracking-widest underline uppercase underline-offset-2 text-primary-500"
      >
        Back home
      </Link>
    </main>
  )
}

export default PageNotFound
