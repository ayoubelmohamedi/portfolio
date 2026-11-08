import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayoub Elmohamedi — Web Applications & Systems",
  description:
    "Developer based in Morocco building web applications and exploring systems programming underneath: servers, databases, and operating systems.",
  authors: [{ name: "Ayoub Elmohamedi" }],
  creator: "Ayoub Elmohamedi",
  openGraph: {
    title: "Ayoub Elmohamedi — Web Applications & Systems",
    description:
      "Developer based in Morocco building web applications and exploring systems programming underneath.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111310",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bg text-fg font-mono antialiased flex flex-col min-h-screen">
        <Header />
        <main id="main-content" className="flex-1 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
