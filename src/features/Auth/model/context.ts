"use client";

import React from "react";
import { User } from "../api/auth.types";

export interface AuthContextState {
  data: User | null;
  isLoading: boolean;
}

interface AuthContextActions {
  setAuth(data: Partial<AuthContextState>): void;
}

export const AuthContext = React.createContext<AuthContextState & AuthContextActions>({
  data: null,
  isLoading: false,
  setAuth() {}
});