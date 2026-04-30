import { NextRequest, NextResponse } from "next/server";

import { authApi } from "features/Auth/api/authApi";

const APP_VERSION = "1.0.0";

const authRoutes = ["/login", "signup"];

export async function middleware(req: NextRequest) {
   const response = NextResponse.next();
   const pathname = req.nextUrl.pathname;

   // Получаем токены
   const accessToken = req.cookies.get("accessToken")?.value;
   const version = req.cookies.get("appVersion")?.value;

   if (version !== APP_VERSION) {
      // Очистка токенов если версия не совпадает с текущей
      response.cookies.delete("accessToken");
      response.cookies.set("appVersion", APP_VERSION, {
         maxAge: 60 * 60 * 24 * 365,
      });
   }

   // Если авторизованы и переходит на страницу регистрации
   const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

   if (isAuthRoute && accessToken) {
      try {
         const r = await authApi.getMe({
            config: {
               headers: {
                  Authorization: `Bearer ${accessToken}`,
               },
            },
         });
          if(!r?.user) {
           throw new Error('User not found');
          }
         const redirectRes = NextResponse.redirect(new URL("/", req.url));

         response.cookies.getAll().forEach((cookie) => {
            redirectRes.cookies.set(cookie);
         });

         return redirectRes;
      } catch (error) {
          response.cookies.delete("accessToken");
      }
   }

   return response;
}

export const config = {
   matcher: ["/((?!api|_next|favicon.ico|.*\\..*).*)"],
};
