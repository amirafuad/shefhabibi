import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shef Habibi - Coming Soon",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#dabd91" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
