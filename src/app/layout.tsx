import "./globals.css";
import { fonts, home, baseURL } from "@/resources";
import { Providers } from "@/components/Providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: home.title,
  description: home.description,
  openGraph: {
    title: home.title,
    description: home.description,
    url: baseURL,
    images: [{ url: `${baseURL}/api/og/generate?title=${encodeURIComponent(home.title)}` }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fonts.heading.variable} ${fonts.body.variable} ${fonts.label.variable} ${fonts.code.variable}`}
    >
      <body className="min-h-screen font-[family-name:var(--font-body)]">
        <Providers>
          {/* Background effects */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-bg)] via-transparent to-transparent" />
            <div className="absolute inset-0 dot-pattern" />
          </div>

          <Header />
          <main className="flex-1 w-full max-w-[1200px] mx-auto px-6 py-8">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
