"use client";

import React from "react";
import { User } from "../api/auth.types"
import { AuthContext, AuthContextState } from "../model/context";

interface AuthProviderProps {
  children: React.ReactNode;
  data?: User | null;
}

export function AuthClientProvider(props: AuthProviderProps) {
  const { children, data } = props;

  const [state, setState] = React.useState<AuthContextState>({
    data: data ?? null,
    isLoading: false,
  });

  const setAuth = (partial: Partial<AuthContextState>) => {
    setState((prev) => ({ ...prev, ...partial }));
  }

  return (
    <AuthContext.Provider value={{ ...state, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}