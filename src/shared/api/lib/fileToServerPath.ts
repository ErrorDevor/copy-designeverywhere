import { config } from "../config";
import { ImageType } from "../types";

export function fileToServerPath(file: ImageType) {
   const orig = config.fileUrl;
   const main = `${orig}/${file.filename}`;
   const webp = file.sizes?.webp?.filename ? `${orig}/${file.sizes.webp.filename}` : null;

   return {
      main,
      webp,
      get optimized() {
         return this.webp || this.main;
      },
   };
}
