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
   prompt?: string;
   category?: Category;
   aiTool?: AiTool;
}

export interface PostList extends PayloadPagination {
   docs: Post[];
}

export interface AiTool {
   id: string;
   name: string;
}

export interface AiToolList extends PayloadPagination {
   docs: AiTool[];
}

export interface Category {
   id: string;
   name: string;
}

export interface CategoryList extends PayloadPagination {
   docs: Category[];
}
