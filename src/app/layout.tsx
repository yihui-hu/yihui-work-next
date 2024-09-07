import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import UmamiProvider from "next-umami";
import "../app/styles/globals.css";

export const metadata: Metadata = {
  title: "Yihui Hu",
  description: "Personal site of Yihui Hu",
};

const roboto = Roboto_Mono({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <head>
        <UmamiProvider websiteId="256da01f-6dcb-453e-bb5a-59cb32134ca6" />
      </head>
      <body>{children}</body>
    </html>
  );
}
