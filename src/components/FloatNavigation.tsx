import clsx from "clsx"
import { NavLink } from "react-router-dom"

const links = [
  {
    name: "home",
    path: "home",
  },
  {
    name: "movies",
    path: "movies",
  },
  {
    name: "TV shows",
    path: "tv-shows",
  },
]

function Navigation() {
  return (
    <nav className="absolute right-[4%] flex flex-col gap-4 text-xl font-medium capitalize top-[120%] text-center">
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          className={({ isActive }) =>
            clsx(
              "px-4 py-2 rounded-md bg-slate-600 active:text-active",
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
