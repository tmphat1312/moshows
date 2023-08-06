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

export function getGenderFromNumber(genderId: 0 | 1 | 2 | 3) {
  switch (genderId) {
    case 0:
      return "unknown"
    case 1:
      return "female"
    case 2:
      return "male"
    case 3:
      return "non-binary"
  }
}
