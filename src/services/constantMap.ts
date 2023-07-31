import { trailerTypes } from "../constants"
import { APIResponseMovie, APIResponseTV, APIResults } from "../types/API"

export type TrailerType = (typeof trailerTypes)[number]

export function getMediaType(tab: TrailerType) {
  if (tab == "In Theaters") return "movie"
  if (tab == "On TV") return "tv"
  return "movie"
}

export function getMediaItem(item: APIResults, mediaType: "movie" | "tv") {
  if (mediaType == "movie") {
    return {
      ...item,
      media_type: "movie",
    } as APIResponseMovie
  }

  return {
    ...item,
    media_type: "tv",
  } as APIResponseTV
}
