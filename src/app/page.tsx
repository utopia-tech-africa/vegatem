import Contact from "@/components/contact/contact";
import FaqSection from "@/components/faq/faq";
import Hero from "@/components/hero/hero";
import Partnership from "@/components/partnership/partnership";
import HowItWorks from "@/components/how-it-works/how-it-works";
import WhatsVegatem from "@/components/whats-vegatem/whats-vegatem";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatsVegatem />
      <HowItWorks />
      <Partnership />
      <FaqSection />
      <Contact />
    </main>
  );
}
