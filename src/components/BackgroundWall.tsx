function BackgroundWall({ children }: BackgroundWallProps) {
  return (
    <div className="relative p-6 overflow-hidden rounded-md bg-gradient-to-r from-primary-200/10 to-primary-100/30">
      {children}
    </div>
  )
}

export type BackgroundWallProps = {
  children: React.ReactNode
}

export default BackgroundWall
