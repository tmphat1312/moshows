import axios from "axios"

const SECRET_TOKEN = import.meta.env.VITE_TMDB_TOKEN
const BASE_URL = import.meta.env.VITE_APP_BASE_API

export const authorizedFetcher = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + SECRET_TOKEN,
  },
})
