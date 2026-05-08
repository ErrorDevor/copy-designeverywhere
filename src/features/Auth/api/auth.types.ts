export interface User {
   id: string;
   createdAt: string;
   role: string;
   email: string;
   plan: "Basic" | "Grow" | "Premium" | null | undefined;
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
   sessionId?: string
}
