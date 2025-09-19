import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Courser from "@/components/cursor";
import LenisProvider from "@/components/LenisProvider";


const poppins = Poppins({ subsets: ["latin"], weight: ["300","400","500","600","700"] });

const SITE_URL = 'https://thuranyi.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Thura Nyi — Software Engineer",
    template: "%s | Thura Nyi"
  },
  description: "Software Engineer crafting fast, accessible, and reliable web experiences.",
  keywords: [
    'Thura Nyi', 'Software Engineer', 'Frontend', 'Next.js', 'TypeScript',
    'React', 'Portfolio', 'Myanmar', 'Web Developer'
  ],
  alternates: {
    canonical: SITE_URL
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'Thura Nyi — Software Engineer',
    description: 'Software Engineer crafting fast, accessible, and reliable web experiences.',
    siteName: 'Thura Nyi',
    images: [
      { url: '/assets/FV.png', width: 1200, height: 630, alt: 'Thura Nyi Portfolio' }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thura Nyi — Software Engineer',
    description: 'Software Engineer crafting fast, accessible, and reliable web experiences.',
    images: ['/assets/FV.png']
  },
  icons: {
    icon: '/favicon.ico'
  },
  themeColor: '#0b1220'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8030993684394945"
          crossOrigin="anonymous"></script>
      </head>
      <body className={poppins.className}>
          <Courser />
          <div className=" py-[50px] md:py-[70px] md:px-[50px] lg:py-0  lg:px-[100px] xl:w-[99%]  px-[22px]  mx-auto">{children}</div>
      </body>
    </html>
  );
}
