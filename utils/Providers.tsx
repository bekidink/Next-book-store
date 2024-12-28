"use client"
import { AuthProvide } from "@/context/AuthContext";
import { store } from "@/state/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

export default function Providers({children}:{children:ReactNode}) {
  return (
    <Provider store={store}>
      <AuthProvide>
        {children}
      </AuthProvide>
    </Provider>
  );}