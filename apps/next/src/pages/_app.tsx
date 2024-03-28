import { AuthProvider } from "@/context/AuthContext";
import { ReactRelayContainer } from "@/relay/ReactRelayContainer";
import "@/styles/globals.css";
import '@radix-ui/themes/styles.css';
import { Toaster } from "@repo/ui/toaster";
import type { AppProps } from "next/app";
import { Suspense } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Suspense fallback="loading">
        <ReactRelayContainer Component={Component} props={pageProps} />
        <Toaster />
      </Suspense>
    </AuthProvider>
  )
}
