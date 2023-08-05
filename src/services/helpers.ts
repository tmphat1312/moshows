export function toHoursAndMinutes(totalMinutes: number) {
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60

  return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`
}

export function toCurrencyFormat(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value)
}

export type ShowcaseType = "movie" | "tv"

export type ShowCaseParams = {
  type: ShowcaseType
}

export type SingleShowcaseParams = {
  id: string
  type: ShowcaseType
}

export function isShowcaseType(type: string | undefined): type is ShowcaseType {
  return !!type && (type === "movie" || type === "tv")
}
