import { isAxiosError } from "axios"
import { useEffect, useState } from "react"
import { authorizedFetcher } from "../services/axios"

export function useFetch<T>(url: string) {
  const [data, setData] = useState<null | T>(null)
  const [error, setError] = useState<null | Error>(null)
  const [status, setStatus] = useState<Status>("idle")

  useEffect(() => {
    async function fetcher() {
      setStatus("pending")
      try {
        const response = await authorizedFetcher.get(url)
        setData(response.data as T)
        setStatus("resolved")
      } catch (error) {
        if (isAxiosError(error)) {
          setError(new Error(error.response?.data.status_message))
        } else if (error instanceof Error) {
          setError(error)
        } else {
          setError(new Error("Unknown error: Something went wrong! @useFetch"))
        }
        console.error(error)
        setStatus("rejected")
      }
    }

    fetcher()
  }, [url])

  return { data, error, status }
}

export type Status = "idle" | "pending" | "resolved" | "rejected"
