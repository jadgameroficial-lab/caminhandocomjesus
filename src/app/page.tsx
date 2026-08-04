import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { VerseBanner } from "@/components/sections/verse-banner";
import { Story } from "@/components/sections/story";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Studies } from "@/components/sections/studies";
import { Community } from "@/components/sections/community";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { FloatingButtons } from "@/components/ui/floating-buttons";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <VerseBanner />
        <Story />
        <HowItWorks />
        <Studies />
        <Community />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
