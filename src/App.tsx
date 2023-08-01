import { RouterProvider, createBrowserRouter } from "react-router-dom"
import PageNotFound from "./routes/PageNotFound"
import Root from "./routes/Root"
import Landing from "./routes/landing/Landing"
import Movies from "./routes/movies/Movies"
import Tv from "./routes/tv/Tv"
import People from "./routes/people/People"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/tv",
        element: <Tv />,
      },
      {
        path: "people",
        element: <People />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={routes} />
}

export default App
