export const HeaderContentLength = "Content-Length";
export const MIME_TYPE_JAVASCRIPT = "text/javascript";
export const MIME_TYPE_WASM = "application/wasm";

export const CORE_VERSION = "0.12.0";
export const CORE_URL = `https://unpkg.com/@ffmpeg/core@${CORE_VERSION}/dist/ffmpeg-core.js`;

export enum FFMessageType {
  LOAD = "load",
  EXEC = "EXEC",
  WRITE_FILE = "WRITE_FILE",
  READ_FILE = "READ_FILE",
  DELETE_FILE = "DELETE_FILE",
  RENAME = "RENAME",
  CREATE_DIR = "CREATE_DIR",
  LIST_DIR = "LIST_DIR",
  DELETE_DIR = "DELETE_DIR",
  ERROR = "ERROR",

  DOWNLOAD = "DOWNLOAD",
  PROGRESS = "PROGRESS",
  LOG = "LOG",
}