import type { Metadata } from "next";
import { Nunito, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyMobileBar from "@/components/layout/StickyMobileBar";
import { clinicSchema } from "@/lib/schema";
import { CLINIC } from "@/lib/data";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${CLINIC.fullName} | Vet Clinic Yangebup`,
    template: `%s | ${CLINIC.name}`,
  },
  description:
    "YB Vet is Yangebup's trusted local vet clinic, serving dogs and cats across Yangebup, Beeliar, Success, Aubin Grove and Bibra Lake. Book online or call (08) 9417 2882.",
  metadataBase: new URL("https://ybvet.com.au"),
  alternates: { canonical: "/" },
  openGraph: {
    siteName: CLINIC.fullName,
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${nunito.variable} ${dmSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.pexels.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema()) }}
        />
      </head>
      <body className="min-h-screen flex flex-col" style={{ paddingBottom: "52px" }}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileBar />
      </body>
    </html>
  );
}
