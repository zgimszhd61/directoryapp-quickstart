import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "探索顶尖科技公司与平台 - 谷歌、OpenAI、NVIDIA 等",
  description: "发现全球领先的科技公司、云计算平台和创新解决方案，了解谷歌、OpenAI、Facebook、NVIDIA、Tesla 等企业的最新技术及其应用，助您在行业中保持领先。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
