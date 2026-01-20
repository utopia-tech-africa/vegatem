import Contact from "@/components/contact/contact";
import FaqSection from "@/components/faq/faq";
import Hero from "@/components/hero/hero";
import Partnership from "@/components/partnership/partnership";

export default function Home() {
  return (
    <main>
      <Hero />
      <Partnership />
      <FaqSection />
      <Contact />
    </main>
  );
}
