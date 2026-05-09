import { config } from "../config";
import { FileType } from "../types";

type BaseFile = {
   filename: string;
   sizes?: {
      webp: {
         url: string | null;
         width: number;
         height: number;
         mimeType: string;
         filename: string | null;
      };
   };
};

export function fileToServerPath<T extends BaseFile>(file: T) {
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
