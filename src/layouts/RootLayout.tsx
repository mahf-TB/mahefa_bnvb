import { Footer } from "@/components/footer";
import Section from "@/components/section";
import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
import SectionWrapper from "../components/section-wrapper";

export default function RootLayout() {
  return (
    <SectionWrapper className="min-h-screen">
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col w-full">
          <Outlet />
        </main>
        <Section className="w-full ">
          <Footer />
        </Section>
      </div>
    </SectionWrapper>
  );
}
