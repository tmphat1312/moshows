import { RouterProvider, createBrowserRouter } from "react-router-dom"
import PageNotFound from "./routes/PageNotFound"
import Root from "./routes/Root"
import Landing from "./routes/landing/Landing"
import People from "./routes/people/People"
import Person from "./routes/person/Person"
import Showcase from "./routes/showcase/Showcase"
import SingleShowcase from "./routes/single-showcase/SingleShowcase"
import Search from "./routes/search/Search"

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
      {
        path: "person/:id",
        element: <Person />,
      },
      {
        path: "search/:type",
        element: <Search />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={routes} />
}

export default App
