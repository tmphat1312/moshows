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
        <a
          key={link.name}
          href={link.path}
          className="transition-transform hover:scale-110 hover:underline underline-offset-2 active:text-active"
        >
          {link.name}
        </a>
      ))}
    </nav>
  )
}

export default Navigation
