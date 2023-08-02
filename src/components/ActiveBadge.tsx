import clsx from "clsx"

function ActiveBadge({ text, action, isActive }: ActiveBadgeProps) {
  return (
    <span
      onClick={action}
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
  isActive: boolean
}

export default ActiveBadge
