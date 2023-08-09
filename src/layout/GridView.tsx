function GridView({ children }: GridViewProps) {
  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
      {children}
    </div>
  )
}

type GridViewProps = {
  children: React.ReactNode
}

export default GridView
