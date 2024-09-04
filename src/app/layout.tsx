import type { Metadata } from "next";
import "../app/styles/globals.css";

export const metadata: Metadata = {
  title: "Yihui Hu",
  description: "Portfolio of Yihui Hu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
