import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import ThemeProviderWrapper from "../theme/ThemeProvider";
import "./globals.css";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohsin Khan Shuvo - Software Engineer Portfolio",
  description: "Experienced Software Engineer with expertise in backend, frontend, and microservices. Strong proficiency in building scalable systems and collaborating with DevOps teams.",
  keywords: "Software Engineer, Full Stack Developer, React, Next.js, Node.js, TypeScript, NestJS, PHP, DevOps",
  authors: [{ name: "Mohsin Khan Shuvo" }],
  openGraph: {
    title: "Mohsin Khan Shuvo - Software Engineer Portfolio",
    description: "Experienced Software Engineer with expertise in backend, frontend, and microservices.",
    url: "https://mkshuvo.github.io",
    siteName: "Mohsin Khan Shuvo Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={poppins.variable}>
        <ThemeProviderWrapper>
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
