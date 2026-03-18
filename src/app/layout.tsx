import type { Metadata } from "next";
import MainLayout from "../components/layouts/MainLayout";
import "./globals.css";
import SocialFloatingBar from "@/components/SocialFloatingBar";

export const metadata: Metadata = {
  title: "VBWF - Liên đoàn cử tạ thể hình Việt Nam",
  description: "VBWF - Liên đoàn cử tạ thể hình Việt Nam",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VBWF - Liên đoàn cử tạ thể hình Việt Nam",
  url: "https://vbwf.org.vn",
  logo: "https://vbwf.org.vn/favicon.ico",
  telephone: "+0971090094",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Số 3A24, Ngõ 385 Hoàng Quốc Việt, Phường Nghĩa Tân, Hà Nội, Việt Nam",
    addressLocality: "Hà Nội",
    addressCountry: "Việt Nam",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://db.onlinewebfonts.com/c/150037e11f159dca84bc4c04549094b6?family=Averta-Regular"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body suppressHydrationWarning>
        <MainLayout>{children}</MainLayout>
        <SocialFloatingBar />
      </body>
    </html>
  );
}
