import { FAQs } from "@/data/faq";
import SectionHeader from "../section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div>
      <SectionHeader
        title="Frequently Asked Questions"
        sub="Everything you need to know about DesignMind pricing and features."
      />

      {/* ============= ACCORDION SECTION ================= */}
      <Accordion type="single" collapsible className="gap-5 flex flex-col mt-10">
        {FAQs.map((faq) => (
          <AccordionItem
            key={faq.id}
            value={faq.id.toString()}
            className="p-2 md:p-4 border border-border rounded-lg bg-white"
          >
            <AccordionTrigger>{faq.title}</AccordionTrigger>
            <AccordionContent>
              {faq.text}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      {/* ============= ACCORDION SECTION ================= */}
    </div>
  )
}
export default FAQ;