import React, { useContext, createContext } from "react";

export const MyContext = createContext(null);

export function useMyContext() {
  const ctx = useContext(MyContext);
  if (ctx == null) {
    throw new Error("useMyContext must be used inside a ContextProvider.");
  }
  return ctx;
}
