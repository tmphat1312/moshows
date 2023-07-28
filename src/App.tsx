import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Landing from "./routes/Landing"
import Root from "./routes/Root"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
