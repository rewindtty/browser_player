/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_UPLOAD_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
