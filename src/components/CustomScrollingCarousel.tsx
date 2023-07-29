import { useEffect, useRef, useState } from "react"

function CustomScrollingCarousel({ children }: CustomScrollingCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null)
  const trackingRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [thumbSize, setThumbSize] = useState(0)

  useEffect(() => {
    const carousel = carouselRef.current
    const tracking = trackingRef.current
    if (!carousel || !tracking) return

    const updateScrollProgress = () => {
      const scrollWidth = carousel.scrollWidth - carousel.clientWidth
      const scrolled = carousel?.scrollLeft
      const progress = (scrolled / scrollWidth) * 100
      setScrollProgress(progress)
      const thumbWidth = (carousel.clientWidth / carousel.scrollWidth) * 100
      setThumbSize(thumbWidth)
    }

    updateScrollProgress()
    carousel.addEventListener("scroll", updateScrollProgress)

    return () => {
      carousel.removeEventListener("scroll", updateScrollProgress)
    }
  }, [])

  return (
    <div className="relative">
      {/* scrolling carousel */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto no-scrollbar scrollbar-behavior children-no-shrink"
      >
        {children}
      </div>
      {/* scrollbar - tracking */}
      <div
        className="h-[0.6rem] w-full bg-slate-400 rounded-md overflow-hidden"
        ref={trackingRef}
        style={{ paddingRight: `${thumbSize - 1}px` }}
      >
        <div
          className="h-full rounded-md bg-gradient-to-r from-primary-500 to-primary-700 drop-shadow-xl"
          style={{ width: `${thumbSize}px`, marginLeft: `${scrollProgress}%` }}
        ></div>
      </div>
    </div>
  )
}

export type CustomScrollingCarouselProps = {
  children: React.ReactNode
}

export default CustomScrollingCarousel
