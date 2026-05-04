import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BALAW - Borderless, Accessible Law",
  description:
    "AI 기반 다국어 법률 지원 플랫폼. 기술로 언어의 장벽을 넘고, 법으로 당신을 보호합니다.",
  icons: {
    icon: "https://ext.same-assets.com/549901695/2060650607.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
