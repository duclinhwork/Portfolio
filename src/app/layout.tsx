import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nguyễn Đức Linh - Data Analyst & ML Engineer",
  description: "Professional portfolio of Nguyễn Đức Linh, Data Analyst and Machine Learning Engineer specializing in AI/ML, ETL pipelines, and Business Intelligence.",
  keywords: "Data Analyst, Machine Learning, AI, ETL, BigQuery, Python, Business Intelligence",
  authors: [{ name: "Nguyễn Đức Linh" }],
  openGraph: {
    title: "Nguyễn Đức Linh - Data Analyst & ML Engineer",
    description: "Professional portfolio showcasing expertise in AI/ML, data engineering, and business intelligence.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
