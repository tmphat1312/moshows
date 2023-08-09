import clsx from "clsx"
import { NavLink } from "react-router-dom"
import { navigationLinks } from "../constants"

function Navigation() {
  return (
    <nav className="absolute right-[4%] flex flex-col gap-4 top-[120%] text-center drop-shadow-lg p-8 rounded-md cool-radius bg-gradient-to-tr from-slate-500 to-slate-700">
      {navigationLinks.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          className={({ isActive }) =>
            clsx(
              "px-4 py-2 rounded-md bg-slate-700 text-xl font-medium capitalize",
              isActive && "text-primary-500 overline"
            )
          }
        >
          {link.name}
        </NavLink>
      ))}
      <div className="absolute inset-y-8 bg-primary-500 inset-x-[48%] -z-10" />
    </nav>
  )
}

export default Navigation
