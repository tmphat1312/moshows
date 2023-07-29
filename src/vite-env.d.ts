/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_BASE_API: string
  readonly VITE_TMDB_ACCESS_TOKEN: string
  readonly VITE_TMDB_TOKEN: string
  readonly VITE_TMDB_IMG_1X_BASE_URL: string
  readonly VITE_TMDB_IMG_2X_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
