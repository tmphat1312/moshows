function CustomScrollingCarousel({ children }: CustomScrollingCarouselProps) {
  return (
    <div className="flex justify-center mx-auto">
      <div className="flex gap-4 overflow-x-auto md:gap-6 children-no-shrink">
        {children}
      </div>
    </div>
  )
}

export type CustomScrollingCarouselProps = {
  children: React.ReactNode
}

export default CustomScrollingCarousel
