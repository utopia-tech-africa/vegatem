import { ComponentLayout } from "../component-layout";
import { AccordionItem } from "./accordion-item";

const faqs = [
  {
    question: "Who should use Vegatem?",
    answer:
      "Vegatem is intended for patients diagnosed with malaria in endemic regions. Healthcare providers determine appropriate use based on individual patient needs and clinical assessment.",
  },
  {
    question: "Is a prescription required?",
    answer:
      "Yes, Vegatem is a prescription medication. It must be dispensed by licensed pharmacies under the direction of qualified healthcare professionals.",
  },
  {
    question: "Where can I find Vegatem?",
    answer:
      "Vegatem is available through authorized pharmaceutical distributors, retail pharmacies, hospitals, and clinics in malaria-endemic regions. Contact our distribution team to locate suppliers in your area.",
  },
  {
    question: "How do distributors apply?",
    answer:
      "Interested distributors, retailers, and healthcare institutions can submit an inquiry through our distribution form. Our team reviews applications and establishes partnership agreements based on regional needs.",
  },
  {
    question: "Who do I contact for more information?",
    answer:
      "Reach out to our partnerships team at partnerships@vegatem.com or use the contact form on this page. We respond to all inquiries within two business days.",
  },
];

export const Faq = () => {
  return (
    <ComponentLayout className="py-16 px-6 md:px-20">
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        {/* header */}
        <div className="text-center flex flex-col gap-4">
          <span className="text-primary-1 font-semibold">FAQ&apos;s</span>
          <h2 className="text-black text-2xl md:text-3xl font-semibold">
            Questions
          </h2>
          <p className="text-black text-sm leading-relaxed">
            Have questions about Vegatem or want to explore a partnership?{" "}
            <br /> Check out our FAQs or get in touch today.
          </p>
        </div>

        {/* accordion */}
        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </ComponentLayout>
  );
};

export default Faq;
