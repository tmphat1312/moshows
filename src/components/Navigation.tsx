import clsx from "clsx"
import { NavLink } from "react-router-dom"
import { navigationLinks } from "../constants"

function Navigation() {
  return (
    <nav className="space-x-6 text-xl font-medium capitalize">
      {navigationLinks.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          className={({ isActive }) =>
            clsx(
              "transition-transform hover:scale-110 hover:underline underline-offset-4",
              isActive && "text-primary-500 overline"
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
