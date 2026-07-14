import type { Metadata, Viewport } from "next";
import "./globals.css";
import { headers } from "next/headers";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.next-hub.pro"),
  title: "Next-Hub Solutions",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#131424",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = (await headers()).get("x-site-locale") || "ka";
  return (
    <html lang={locale} dir="ltr" className="h-full antialiased">
      <body className="min-h-full bg-[#07111f] text-slate-100">{children}</body>
    </html>
  );
}
