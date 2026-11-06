
import type { Metadata } from "next";
import { Geist, Noto_Sans_Hebrew } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-portuguese",
  subsets: ["latin"],
});

const notoHebrew = Noto_Sans_Hebrew({
  variable: "--font-hebrew",
  subsets: ["hebrew", "latin"],
});

export const metadata: Metadata = {
  title: "IVRIT — Língua, História e Cultura",
  description:
    "Aprenda hebraico e descubra as histórias, culturas e comunidades que dão vida a essa língua.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${notoHebrew.variable}`}>
      <body>{children}</body>
    </html>
  );
}
