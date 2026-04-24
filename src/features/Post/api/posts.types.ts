import { ImageType, PayloadPagination } from "shared/api/types";

export interface Post {
   id: string;
   title: string;
   slug: string;
   sectionType?: string;
   preview: ImageType;
   tags: Array<{
      id: string;
      value: string;
   }>;
   plan: "premium" | "free";
   category?: {
      id: string;
      name: string;
   };
   aiTool?: {
      id: string;
      name: string;
   };
}

export interface PostList extends PayloadPagination {
   docs: Post[];
}
