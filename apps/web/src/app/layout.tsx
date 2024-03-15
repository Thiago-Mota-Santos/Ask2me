import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import RelayProvider from "./relayProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pay2me",
  description: "Send your question",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RelayProvider>
          {children}
        </RelayProvider>
      </body>
    </html>
  );
}
