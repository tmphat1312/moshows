import NavBar from "./NavBar"

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 bg-black/40 drop-shadow-sm">
      <NavBar />
    </header>
  )
}

export default Header
