import { create } from "zustand"
import { devtools } from "zustand/middleware"

export type SearchState = {
  // state
  videoId: string

  // actions
  setVideoId: (id: string) => void
  clearVideoId: () => void
}

export const useVideoPlayerStore = create<SearchState>()(
  devtools((set) => ({
    // state
    videoId: "id",

    // actions
    setVideoId: (id: string) => set({ videoId: id }),
    clearVideoId: () => set({ videoId: "" }),
  }))
)
