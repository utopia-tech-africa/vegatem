import Hero from "@/components/hero/hero";
import HowItWorks from "@/components/how-it-works/how-it-works";
import WhatsVegatem from "@/components/whats-vegatem/whats-vegatem";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatsVegatem />
      <HowItWorks />
    </main>
  );
}
