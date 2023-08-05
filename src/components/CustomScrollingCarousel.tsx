import "./CustomScrollingCarousel.css"

function CustomScrollingCarousel({ children }: CustomScrollingCarouselProps) {
  return (
    <div className="flex justify-center mx-auto">
      <div className="scrolling-carousel">{children}</div>
    </div>
  )
}

export type CustomScrollingCarouselProps = {
  children: React.ReactNode
}

export default CustomScrollingCarousel
