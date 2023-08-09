import { create } from "zustand"
import { devtools } from "zustand/middleware"

export type SearchState = {
  // state
  videoId: string
  videoKey: string
  type: string

  // actions
  setVideoId: (id: string) => void
  clearVideoId: () => void
  setType: (type: string) => void
  setVideoKey: (key: string) => void
  clearVideoKey: () => void
}

export const useVideoPlayerStore = create<SearchState>()(
  devtools((set) => ({
    // state
    videoId: "",
    videoKey: "",
    type: "movie",

    // actions
    setVideoId: (id: string) => set({ videoId: id }),
    clearVideoId: () => set({ videoId: "" }),
    setType: (type: string) => set({ type: type }),
    setVideoKey: (key: string) => set({ videoKey: key }),
    clearVideoKey: () => set({ videoKey: "" }),
  }))
)
