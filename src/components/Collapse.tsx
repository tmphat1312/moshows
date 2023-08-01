import { useState } from "react"
import { AiFillCaretRight } from "react-icons/ai"

function Collapse({ title, children }: CollapseProps) {
  const [dropDown, setDropDown] = useState(false)

  return (
    <div className="rounded-lg bg-slate-300 text-slate-900 drop-shadow-lg">
      <div
        className="px-2 py-1 text-lg capitalize border-b cursor-pointer font-display flex-btw-center border-slate-600"
        onClick={() => setDropDown(!dropDown)}
      >
        {title}
        <AiFillCaretRight />
      </div>
      {dropDown && <div className="p-2">{children}</div>}
    </div>
  )
}

export type CollapseProps = {
  title: string
  children: React.ReactNode
}

export default Collapse
