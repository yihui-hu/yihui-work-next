import type { Metadata } from "next";
import localFont from 'next/font/local'
import "../app/styles/globals.css";

export const metadata: Metadata = {
  title: "Yihui Hu",
  description: "Portfolio of Yihui Hu",
};

const commitMono = localFont({
  src: './CommitMono-450-Regular.otf',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={commitMono.className}>
      <body>{children}</body>
    </html>
  );
}
