import { Footer } from "../shared/components/footer";
import { Header } from "../shared/components/header";
import Section from "../shared/components/section";
import SectionWrapper from "../shared/components/section-wrapper";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import { Providers } from "./providers";
import "@/index.css";

const mavenProBlack = localFont({
  src: "../shared/assets/fonts/MavenPro-Black.ttf",
  variable: "--font-maven-pro-black",
  weight: "900",
});

const poppinsBlack = localFont({
  src: "../shared/assets/fonts/Poppins-Black.ttf",
  variable: "--font-poppins-black",
  weight: "900",
});

export const metadata: Metadata = {
  title: "Mahefa Bienvenu | Software Engineer",
  description:
    "Portfolio de Mahefa Bienvenu, ingénieur logiciel full-stack spécialisé en applications performantes.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className="dark">
      <body className={`${mavenProBlack.variable} ${poppinsBlack.variable}`}>
        <Providers>
          <SectionWrapper className="min-h-screen">
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex w-full flex-1 flex-col">{children}</main>
              <Section className="w-full">
                <Footer />
              </Section>
            </div>
          </SectionWrapper>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
