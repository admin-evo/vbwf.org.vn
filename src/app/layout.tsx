import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import MainLayout from "../components/layouts/MainLayout";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VBWF - Liên đoàn cử tạ thể hình Việt Nam",
  description: "VBWF - Liên đoàn cử tạ thể hình Việt Nam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${montserrat.variable} antialiased`}
      >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
