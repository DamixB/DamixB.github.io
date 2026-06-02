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
  metadataBase: new URL("https://damixb.github.io"),
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DamixB — Developer & Creator",
    description:
      "Portfolio projektów webowych, narzędzi AI i rozwiązań cyfrowych.",
    url: "https://damixb.github.io",
    siteName: "damixb.github.io",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DamixB — Developer & Creator Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DamixB — Developer & Creator",
    description:
      "Portfolio projektów webowych, narzędzi AI i rozwiązań cyfrowych.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "DamixB",
  url: "https://damixb.github.io",
  sameAs: [
    "https://github.com/DamixB",
    "https://linkedin.com/in/damixb",
    "https://instagram.com/damixb",
  ],
  jobTitle: "Developer & Creator",
  description:
    "Portfolio projektów webowych, narzędzi AI i rozwiązań cyfrowych.",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-[#e8e8f0] font-[family-name:var(--font-inter)]">
        {/* Skip-to-content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-medium"
          style={{
            background: "var(--accent-neon)",
            color: "#0a0a0f",
          }}
        >
          Przejdź do treści
        </a>
        {children}
      </body>
    </html>
  );
}
