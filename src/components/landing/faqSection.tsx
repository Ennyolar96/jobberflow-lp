import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is Jobberflow free to use?",
    a: "Yes! Jobberflow is completely free and open source. You only need to provide your own API keys for the AI features.",
  },
  {
    q: "Do I need coding experience to use it?",
    a: "Not at all. The app is designed for everyone. Just download, set up your API keys, and start using the features right away.",
  },
  {
    q: "Is my data safe?",
    a: "Absolutely. API keys are stored securely on our server using SQLite for easy access, while all other information and personal data are stored locally on your device for maximum privacy.",
  },
  {
    q: "Which AI models does Jobberflow support?",
    a: "Jobberflow supports OpenAI (required) and Gemini (optional) models. The system automatically selects the best model for each specific task.",
  },
  {
    q: "Can I contribute to the project?",
    a: "Yes! We welcome contributions of all kinds — code, feedback, bug reports, and feature suggestions. Check out our GitHub repositories to get started.",
  },
  {
    q: "What about the AI Job Searcher feature?",
    a: "The AI Job Searcher is currently under development and will be available soon. It will automatically find and suggest jobs based on your profile and preferences.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-primary tracking-wider uppercase">
            FAQ
          </span>
          <h2 className="font-inter font-extrabold text-3xl md:text-4xl mt-3 tracking-tight">
            Frequently asked questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass-card !rounded-xl px-4 md:px-6 data-[state=open]:border-primary/40 transition-colors"
              >
                <AccordionTrigger className="font-inter font-semibold text-sm md:text-base hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-5 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
