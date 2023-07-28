import clsx from "clsx"
import { NavLink } from "react-router-dom"

const links = [
  {
    name: "home",
    path: "/home",
  },
  {
    name: "movies",
    path: "/movies",
  },
  {
    name: "TV shows",
    path: "/tv-shows",
  },
]

function Navigation() {
  return (
    <nav className="space-x-6 text-xl font-medium capitalize">
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          className={({ isActive }) =>
            clsx(
              "transition-transform hover:scale-110 hover:underline underline-offset-2 active:text-active",
              isActive && "text-primary-500 underline"
            )
          }
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  )
}

export default Navigation
