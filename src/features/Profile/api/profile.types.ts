import { FileType } from "shared/api/types";

export interface Profile {
   id: string;
   avatar: FileType | null;
   name: string | null;
   email: string;
}
