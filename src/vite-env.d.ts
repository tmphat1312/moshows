/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_BASE_API: string
  readonly VITE_TMDB_ACCESS_TOKEN: string
  readonly VITE_TMDB_TOKEN: string
  readonly VITE_TMDB_IMG_1X_BASE_URL: string
  readonly VITE_TMDB_IMG_2X_BASE_URL: string
  readonly VITE_TMDB_BD_1X_BASE_URL: string
  readonly VITE_TMDB_BD_2X_BASE_URL: string
  readonly VITE_TMDB_PF_1X_BASE_URL: string
  readonly VITE_TMDB_PF_2X_BASE_URL: string
  readonly VITE_TMDB_PD_BASE_URL: string
  readonly VITE_TMDB_POS_1X_BASE_URL: string
  readonly VITE_TMDB_POS_2X_BASE_URL: string
  readonly VITE_TMDB_HERO_BASE_URL: string
  readonly VITE_TMDB_CAST_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
