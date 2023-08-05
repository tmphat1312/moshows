import { RouterProvider, createBrowserRouter } from "react-router-dom"
import PageNotFound from "./routes/PageNotFound"
import Root from "./routes/Root"
import Landing from "./routes/landing/Landing"
import People from "./routes/people/People"
import Showcase from "./routes/showcase/Showcase"
import SingleShowcase from "./routes/single-showcase/SingleShowcase"

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
        path: "showcase/:type",
        element: <Showcase />,
      },
      {
        path: "people",
        element: <People />,
      },
      {
        path: "showcase/:type/:id",
        element: <SingleShowcase />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={routes} />
}

export default App
