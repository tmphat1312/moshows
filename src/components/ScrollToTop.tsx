import { useEffect, useRef } from "react"
import { GoMoveToTop } from "react-icons/go"

function ScrollToTop() {
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const button = buttonRef.current
    if (button == null) return

    function handleScroll() {
      if (button == null) return

      if (window.scrollY > 100) {
        button.classList.remove("hidden")
      } else {
        button.classList.add("hidden")
      }
    }

    function handleClick() {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }

    window.addEventListener("scroll", handleScroll)
    button.addEventListener("click", handleClick)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      button.removeEventListener("click", handleClick)
    }
  }, [])

  return (
    <button
      className="p-2 text-3xl rounded-full bg-slate-300 text-slate-900 drop-shadow-lg"
      title="back to top"
      ref={buttonRef}
    >
      <GoMoveToTop />
    </button>
  )
}

export default ScrollToTop
