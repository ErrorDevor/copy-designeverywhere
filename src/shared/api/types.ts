import { SerializedEditorState } from "lexical";

export type SearchQuery = Record<string, any> | string | undefined;

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

export type FileType = {
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
   thumbnail?: {
      url?: string;
      name?: string;
   };
};

export interface FaqItem {
   id: string;
   question: string;
   answer: SerializedEditorState;
}
