import { Footer } from "@/components/footer";
import Section from "@/components/section";
import { useEffect } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { Header } from "../components/header";
import SectionWrapper from "../components/section-wrapper";

export default function RootLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <SectionWrapper className="min-h-screen">
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col w-full">
          <Outlet />
        </main>
        <ScrollRestoration />
        <Section className="w-full ">
          <Footer />
        </Section>
      </div>
    </SectionWrapper>
  );
}
