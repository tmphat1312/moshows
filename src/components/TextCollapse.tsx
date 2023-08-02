import clsx from "clsx"
import { useState } from "react"
import { AiFillCaretRight } from "react-icons/ai"

function TextCollapse({ title, children, open }: TextCollapseProps) {
  const [dropDown, setDropDown] = useState(open ?? false)

  return (
    <div>
      <div
        className="flex items-center gap-1 px-2 py-1 text-lg capitalize cursor-pointer"
        onClick={() => setDropDown(!dropDown)}
      >
        {title}
        <span className={clsx(dropDown && "rotate-90")}>
          <AiFillCaretRight />
        </span>
      </div>
      {dropDown && <div className="p-2">{children}</div>}
    </div>
  )
}

export type TextCollapseProps = {
  title: string
  children: React.ReactNode
  open?: boolean
}

export default TextCollapse
