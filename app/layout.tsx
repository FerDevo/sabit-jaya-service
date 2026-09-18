import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sabit Jaya Service | Service AC 24 Jam Jabodetabek",
  description:
    "Sabit Jaya Service menyediakan jasa service AC profesional 24 jam di Jabodetabek dengan harga terjangkau dan bergaransi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
