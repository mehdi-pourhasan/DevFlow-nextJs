import React from "react";
import { ClerkProvider } from "@clerk/nextjs";

export const metadate = {
  title: "NextJs app with clerk",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
