import { ImageType } from "shared/api/types";

export interface Profile {
   id: string;
   avatar: ImageType | null;
   name: string | null;
   email: string;
}
