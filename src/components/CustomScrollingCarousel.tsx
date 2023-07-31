import "./CustomScrollingCarousel.css"

function CustomScrollingCarousel({ children }: CustomScrollingCarouselProps) {
  return <div className="scrolling-carousel">{children}</div>
}

export type CustomScrollingCarouselProps = {
  children: React.ReactNode
}

export default CustomScrollingCarousel
