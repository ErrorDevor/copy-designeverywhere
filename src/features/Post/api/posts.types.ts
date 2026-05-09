import { Profile } from "features/Profile";

import { FileType, PayloadPagination } from "shared/api/types";

export interface Post {
   id: string;
   title: string;
   slug: string;
   sectionType?: string;
   preview: FileType;
   tagsList?: Array<PostTag>;
   plan: "premium" | "free" | "coming-soon";
   prompt?: string;
   category?: Category;
   aiTool: AiTool[];
   file?: FileType;
   createdBy: Profile | null;
}

export interface PostTag {
   id: string;
   value: string;
   count: number;
}

export interface PostTagList extends PayloadPagination {
   docs: PostTag[];
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
