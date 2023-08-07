import { useState } from "react"

function ShowMore({
  maxLength = 500,
  text,
  defaultShow = false,
}: ShowMoreProps) {
  const [showMore, setShowMore] = useState(defaultShow)
  const hasMore = text.length > maxLength

  const cutText = text.slice(0, maxLength)

  return (
    <p>
      {cutText}
      {hasMore && !showMore && <>...</>}
      {showMore && <>{text.slice(maxLength, text.length)}</>}
      {hasMore && (
        <button
          onClick={() => setShowMore(!showMore)}
          className="px-2 text-primary-500 hover:underline font-display"
        >
          {showMore ? "show less" : "show more"}
        </button>
      )}
    </p>
  )
}

export type ShowMoreProps = {
  maxLength?: number
  text: string
  defaultShow?: boolean
}

export default ShowMore
