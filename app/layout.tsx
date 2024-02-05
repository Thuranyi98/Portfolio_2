import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Courser from "@/components/cursor";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thura Nyi",
  description: "A Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
<link rel="preconnect" href="https://rsms.me/"/>
<link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8030993684394945"
     crossOrigin="anonymous"></script>
      </head>
      <body className={inter.className}>
        <Courser/>
        <div className=" py-[50px] md:py-[70px] md:px-[50px] lg:py-0  lg:px-[100px] xl:w-[1300px]  px-[22px]  mx-auto">{children}</div>
      </body>
    </html>
  );
}
