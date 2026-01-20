import { ComponentLayout } from "@/components/component-layout";
import { WhatsVegatemVideo } from "./components/whats-vegatem-video";
import { WhatsVegatemContent } from "./components/whats-vegatem-content";

export default function WhatsVegatem() {
  return (
    <section id="about-vegatem" className="w-full bg-primary-2">
      <ComponentLayout>
        <div className="flex flex-col md:flex-row items-center gap-10 p-4">
          {/* Video on the left */}
          <div className="flex-1">
            <WhatsVegatemVideo />
          </div>

          {/* Content on the right */}
          <div className="flex-1 w-full">
            <WhatsVegatemContent />
          </div>
        </div>
      </ComponentLayout>
    </section>
  );
}
