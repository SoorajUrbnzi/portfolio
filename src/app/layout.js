import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

export const metadata = {
  metadataBase: new URL("https://abhishek.urbanzi.in"),

  title: {
    default: "Abhishek | Founder of Urbanzi Solutions LLP",
    template: "%s | Abhishek",
  },

  description:
    "Explore the portfolio of Abhishek, Founder of Urbanzi Solutions LLP. Discover innovative web development, UI/UX design, digital products, and technology-driven solutions.",

  keywords: [
    "Abhishek",
    "Urbanzi Solutions LLP",
    "Portfolio",
    "Web Developer",
    "Next.js Developer",
    "UI UX Designer",
    "Software Developer",
    "Kerala",
  ],

  authors: [{ name: "Abhishek" }],
  creator: "Abhishek",
  publisher: "Urbanzi Solutions LLP",

  openGraph: {
    title: "Abhishek | Founder of Urbanzi Solutions LLP",
    description:
      "Explore the portfolio of Abhishek, Founder of Urbanzi Solutions LLP. Discover innovative web development, UI/UX design, digital products, and technology-driven solutions.",
    url: "https://abhishek.urbanzi.in",
    siteName: "Abhishek Portfolio",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/og-image1.png",
        width: 1200,
        height: 630,
        alt: "Abhishek - Founder of Urbanzi Solutions LLP",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Abhishek | Founder of Urbanzi Solutions LLP",
    description:
      "Explore the portfolio of Abhishek, Founder of Urbanzi Solutions LLP.",
    images: ["/og-image1.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://abhishek.urbanzi.in",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};