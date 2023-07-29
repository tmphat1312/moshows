import "./Skeleton.css"

export function SkeletonBox({ children }: { children: React.ReactNode }) {
  return <div className="skeleton-box">{children}</div>
}
