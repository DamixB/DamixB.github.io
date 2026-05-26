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
  title: "Damian B. — Technolog PMP | Developer | Creator | damixb.github.io",
  description:
    "Osobista strona wizytówkowa Damiana B. — technologa PMP, developera i twórcy innowacyjnych rozwiązań. Portfolio, doświadczenie, projekty i narzędzia.",
  keywords: [
    "Damian B.",
    "damixb",
    "portfolio",
    "developer",
    "technolog PMP",
    "druk 3D",
    "React",
    "Next.js",
    "web developer",
    "mechatronika",
  ],
  authors: [{ name: "Damian B.", url: "https://damixb.github.io" }],
  creator: "Damian B.",
  openGraph: {
    title: "Damian B. — Technolog PMP | Developer | Creator",
    description:
      "Osobista strona wizytówkowa Damiana B. — technologa PMP, developera i twórcy innowacyjnych rozwiązań.",
    url: "https://damixb.github.io",
    siteName: "damixb.github.io",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Damian B. — Technolog PMP | Developer | Creator",
    description:
      "Osobista strona wizytówkowa Damiana B. — technologa PMP, developera i twórcy innowacyjnych rozwiązań.",
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
