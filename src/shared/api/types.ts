export interface PageWithSearchParams {
   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export type PayloadPagination = {
   totalDocs: number;
   limit: number;
   totalPages: number;
   page: number;
   pagingCounter: number;
   hasPrevPage: boolean;
   hasNextPage: boolean;
   prevPage: number | null;
   nextPage: number | null;
};

export type ImageType = {
   id: string;
   createdAt: string;
   updatedAt: string;
   url: string;
   filename: string;
   mimeType: string;
   filesize: number;
   width: number;
   height: number;
   alt?: string;
   sizes: {
      webp: {
         url: string | null;
         width: number;
         height: number;
         mimeType: string;
         filename: string | null;
      };
   };
   thumbnailURL: string | null;
};
