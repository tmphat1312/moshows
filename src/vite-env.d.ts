/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_BASE_API: string
  readonly VITE_TMDB_ACCESS_TOKEN: string
  readonly VITE_TMDB_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
