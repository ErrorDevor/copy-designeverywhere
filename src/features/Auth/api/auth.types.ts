export interface User {
   id: string;
   createdAt: string;
   role: string;
   email: string;
   sessions: Array<{
      id: string;
      createdAt: string;
      expiresAt: string;
   }>;
}

export interface AuthLoginDTO {
   message: string;
   exp: number;
   token: string;
   user: User;
}

export interface AuthLoginDataDTO {
   email: string;
   password: string;
}
