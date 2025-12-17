import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What network should I use?",
    answer: "Only send ETH on the Base network. Do not send from other networks like Ethereum mainnet, Arbitrum, or Optimism.",
  },
  {
    question: "When will I receive my tokens?",
    answer: "Tokens will be airdropped to participating wallets within 48 hours after the presale concludes.",
  },
  {
    question: "Is there a maximum contribution?",
    answer: "There is no maximum contribution limit. However, token allocation is proportional to your contribution.",
  },
  {
    question: "Can I participate from any wallet?",
    answer: "Yes, any Base-compatible wallet that you control the private keys for. Do not send from exchanges.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-left text-foreground hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
