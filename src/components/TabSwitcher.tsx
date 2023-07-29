import clsx from "clsx"
import { useEffect, useRef, useState } from "react"

export interface TabSwitcherProps {
  readonly tabs: string[]
  action: (tab: string) => void
}

function TabSwitcher({ tabs, action }: TabSwitcherProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const itemsRef = useRef(new Map<string, HTMLButtonElement>())
  const activeSlideRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const activeTab = tabs[activeIndex]
    const map = itemsRef.current
    const tab = map.get(activeTab)

    if (activeSlideRef.current) {
      const { offsetLeft, offsetWidth } = tab as HTMLButtonElement
      activeSlideRef.current.style.transform = `translateX(${offsetLeft}px)`
      activeSlideRef.current.style.width = `${offsetWidth}px`
    }
  }, [activeIndex])

  function handleRefs(tab: string, ref: HTMLButtonElement | null) {
    const map = itemsRef.current
    if (!map) return

    if (ref) {
      !map.has(tab) && map.set(tab, ref)
    } else {
      map.has(tab) && map.delete(tab)
    }
  }

  function handleTabClick(index: number) {
    setActiveIndex(index)
    action(tabs[index])
  }

  return (
    <div className="relative inline-flex items-center overflow-hidden font-medium border-2 rounded-full">
      {tabs.map((tab, index) => (
        <button
          className={clsx(
            "px-4 py-1 rounded-3xl z-10  capitalize",
            index == activeIndex && "text-slate-50"
          )}
          key={tab}
          onClick={() => handleTabClick(index)}
          ref={(ref) => handleRefs(tab, ref)}
        >
          {tab}
        </button>
      ))}
      <div
        className="absolute inset-y-0 z-0 transition-all duration-500 bg-gradient-to-r from-primary-400 to-primary-500 rounded-2xl"
        ref={activeSlideRef}
        style={{ transitionTimingFunction: "cubic-bezier(.29,-0.6,.49,1.49)" }}
      ></div>
    </div>
  )
}

export default TabSwitcher
