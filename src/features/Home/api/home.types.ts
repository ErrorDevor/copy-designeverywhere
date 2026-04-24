import { Post } from "features/Post/api/posts.types";

export interface Home {
   main: {
      title: string;
      slogan: string;
      post: Post;
   };
   trending: {
      post: Post[];
   };
}
