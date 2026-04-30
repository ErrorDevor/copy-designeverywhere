"use client";

import { useContext } from "react";

import { User } from "../api/auth.types";
import { authApi } from "../api/authApi";
import { removeAccessToken } from "../lib/cookies";

import { AuthContext } from "./context";

export function useAuth() {
   const context = useContext(AuthContext);

   const setUserData = (data: User | null) => {
      context.setAuth({ data });
   };

   const login = async (email: string, password: string) => {
      try {
         context.setAuth({ isLoading: true });

         const response = await authApi.login({
            email,
            password,
         });

         context.setAuth({
            data: response.user,
            isLoading: false,
         });
      } catch (error) {
         context.setAuth({ isLoading: false });
      }
   };

   const softLogin = async (data: User) => {
      context.setAuth({
         data,
         isLoading: false,
      });
   };

   const logout = () => {
      removeAccessToken();
      context.setAuth({
         data: null,
         isLoading: false,
      });
   };

   const refresh = async () => {
      try {
         const response = await authApi.getMe();
         context.setAuth({ data: response.user || null });
      } catch (error) {}
   };

   return {
      data: context.data,
      isLoading: context.isLoading,
      login,
      logout,
      refresh,
      setUserData,
      softLogin,
   };
}
