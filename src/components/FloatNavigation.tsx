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
    name: "tv shows",
    path: "/tv-shows",
  },
]

function Navigation() {
  return (
    <nav className="absolute right-[4%] flex flex-col gap-4 text-xl font-medium capitalize top-[120%] text-center">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.path}
          className="px-4 py-2 bg-white rounded-md active:text-active drop-shadow-sm"
        >
          {link.name}
        </a>
      ))}
    </nav>
  )
}

export default Navigation
