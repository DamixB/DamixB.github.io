import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DamixB — Developer & Creator | Portfolio",
  description:
    "Portfolio projektów webowych, narzędzi AI i rozwiązań cyfrowych. Sprawdź moje realizacje i skontaktuj się ze mną.",
  keywords: [
    "damixb",
    "portfolio",
    "developer",
    "druk 3D",
    "React",
    "Next.js",
    "web developer",
    "AI tools",
  ],
  authors: [{ name: "DamixB", url: "https://damixb.github.io" }],
  creator: "DamixB",
  openGraph: {
    title: "DamixB — Developer & Creator",
    description:
      "Portfolio projektów webowych, narzędzi AI i rozwiązań cyfrowych.",
    url: "https://damixb.github.io",
    siteName: "damixb.github.io",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DamixB — Developer & Creator",
    description:
      "Portfolio projektów webowych, narzędzi AI i rozwiązań cyfrowych.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-[#e8e8f0] font-[family-name:var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
