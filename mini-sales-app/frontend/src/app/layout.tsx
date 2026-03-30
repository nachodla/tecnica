import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mini Sales App",
  description: "Track and evaluate your sales",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
