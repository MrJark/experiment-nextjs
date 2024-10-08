import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "mrjark Web Testing",
  description: "Generated by mrjark with create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-900">{children}</body>
    </html>
  );
}
