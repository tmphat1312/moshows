import clsx from "clsx"
import { useState } from "react"

function ActiveBadge({ text, action }: ActiveBadgeProps) {
  const [isActive, setIsActive] = useState(false)

  function handleBadgeClick() {
    setIsActive(!isActive)
    action()
  }

  return (
    <span
      onClick={handleBadgeClick}
      className={clsx(
        "px-1 border rounded-full border-slate-900 cursor-pointer",
        isActive && "bg-slate-400"
      )}
    >
      {text}
    </span>
  )
}

export type ActiveBadgeProps = {
  text: string
  action: () => void
}

export default ActiveBadge
