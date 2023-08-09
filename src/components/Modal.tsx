import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { FaRegWindowClose } from "react-icons/fa"

function Modal({
  children,
  title,
  defaultOpen = true,
  controlState,
  closeAction,
}: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    function handleClose(e: MouseEvent) {
      const dialog = dialogRef.current
      if (dialog && !dialog.contains(e.target as Node)) {
        closeAction()
      }
    }

    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closeAction()
      }
    }

    window.addEventListener("click", handleClose)
    window.addEventListener("keydown", handleEscape)

    return () => {
      window.removeEventListener("click", handleClose)
      window.removeEventListener("keydown", handleEscape)
    }
  }, [closeAction])

  return (
    <>
      {controlState &&
        createPortal(
          <div className="fixed inset-0 z-20 grid place-items-center backdrop-brightness-50">
            <dialog
              ref={dialogRef}
              open={defaultOpen}
              className="w-full bg-transparent"
            >
              <div className="w-3/4 max-w-4xl mx-auto bg-slate-500">
                <form method="dialog" className="flex-btw-center">
                  <h2 className="px-2 text-xl capitalize">{title}</h2>
                  <button
                    className="p-2 text-3xl hover:text-red-500"
                    onClick={closeAction}
                  >
                    <FaRegWindowClose />
                  </button>
                </form>
                {children}
              </div>
            </dialog>
          </div>,
          document.body
        )}
    </>
  )
}

type ModalProps = {
  children: React.ReactNode
  title: string
  controlState: boolean
  closeAction: () => void
  defaultOpen?: boolean
}

export default Modal
