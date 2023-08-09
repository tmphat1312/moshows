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
  const dialogCntRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClose(e: MouseEvent) {
      const dialogCnt = dialogCntRef.current
      if (dialogCnt == e.target) {
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
          <div
            className="fixed inset-0 z-20 grid backdrop-brightness-50 place-items-center"
            ref={dialogCntRef}
          >
            <dialog
              open={defaultOpen}
              className="overflow-hidden bg-transparent rounded-sm"
            >
              <div className="bg-slate-500">
                <form method="dialog" className="flex-btw-center">
                  <h2 className="px-2 text-xl capitalize">{title}</h2>
                  <button
                    className="p-2 text-3xl hover:text-red-500"
                    onClick={closeAction}
                    title="Hit escape to close"
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
