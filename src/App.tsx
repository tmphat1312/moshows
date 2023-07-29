import { RouterProvider, createBrowserRouter } from "react-router-dom"
import PageNotFound from "./routes/PageNotFound"
import Root from "./routes/Root"
import Landing from "./routes/landing/Landing"

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
        path: "/home",
        element: <div>Home</div>,
      },
      {
        path: "/movies",
        element: <div>Movies</div>,
      },
      {
        path: "/tv-shows",
        element: <div>Tv Shows</div>,
      },
      {
        path: "/single-item/:id",
        element: <div>Single Item</div>,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={routes} />
}

export default App
