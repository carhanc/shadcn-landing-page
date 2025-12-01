import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Do you work on European or hybrid vehicles?",
    answer:
      "Yes. Our technicians are trained on European, hybrid, and EV platforms with dedicated diagnostic equipment for BMW, Mercedes, Toyota, Tesla, and more.",
    value: "item-1",
  },
  {
    question: "Can I wait while my car is serviced?",
    answer:
      "Absolutely. Our lounge has Wi-Fi, refreshments, and workspace seating. For longer jobs we provide a complimentary local shuttle or rideshare credit.",
    value: "item-2",
  },
  {
    question: "What warranty do you offer on repairs?",
    answer:
      "Most repairs include a 24-month/24,000-mile nationwide warranty. We’ll note any exceptions on your estimate before work begins.",
    value: "item-3",
  },
  {
    question: "How soon can you see my vehicle?",
    answer:
      "Same-day appointments are often available for maintenance. For diagnostics or major repairs, we typically schedule within 1-2 business days.",
    value: "item-4",
  },
  {
    question: "Do you offer fleet or commercial maintenance?",
    answer:
      "Yes. We tailor preventative plans, provide consolidated billing, and prioritize turnaround for local fleet, delivery, and rideshare vehicles.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Answers before you arrive
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
