import url from "node:url";
import path from "node:path";
import { defineConfig } from "waku/config";

export default defineConfig({
  root: path.dirname(url.fileURLToPath(import.meta.url)),
  ssr: {
    // FIXME: waku doesn't support `client dependencies` and most of the dependencies are not externalized
    external: ['react', 'minimatch', 'react-server-dom-webpack', '@prisma/client'],
  },
});