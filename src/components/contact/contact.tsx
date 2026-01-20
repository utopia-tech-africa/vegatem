import { ComponentLayout } from "../component-layout";
import ConnectSection from "./components/connect-section";
import { ContactForm } from "./components/contact-form";

const Contact = () => {
  return (
    <ComponentLayout className="flex flex-col gap-12 lg:flex-row lg:justify-between mt-10 mb-17">
      <div className="w-full lg:max-w-105">
        <ConnectSection />
      </div>

      <div className="w-full lg:max-w-130">
        <ContactForm />
      </div>
    </ComponentLayout>
  );
};

export default Contact;
