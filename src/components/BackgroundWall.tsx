function BackgroundWall({ children }: BackgroundWallProps) {
  return (
    <div className="p-4 rounded-md md:p-6 bg-gradient-to-r from-primary-200/10 to-slate-700/30">
      {children}
    </div>
  )
}

export type BackgroundWallProps = {
  children: React.ReactNode
}

export default BackgroundWall
