import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Velvet Pour",
  description: "Cocktail landing page",
  icons: "/images/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
