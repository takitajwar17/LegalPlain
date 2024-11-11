"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How accurate is LegalPlain.ai's simplification?",
    answer:
      "LegalPlain.ai uses advanced AI models specifically trained on legal documents to ensure high accuracy. Our system has been tested across various legal documents and consistently provides reliable simplifications while maintaining the original meaning.",
  },
  {
    question: "Is my data secure when using LegalPlain.ai?",
    answer:
      "Absolutely! LegalPlain.ai processes all documents locally in your browser. Your sensitive legal documents never leave your device, ensuring complete privacy and security.",
  },
  {
    question: "Which types of legal documents can LegalPlain.ai simplify?",
    answer:
      "LegalPlain.ai can simplify various legal documents including contracts, terms of service, privacy policies, legal agreements, and more. The extension is designed to handle complex legal language across different document types.",
  },
  {
    question: "Does LegalPlain.ai work in multiple languages?",
    answer:
      "Yes! LegalPlain.ai supports multiple languages and can simplify legal documents in various languages. The extension can also help translate simplified text into your preferred language.",
  },
  {
    question: "Can I use LegalPlain.ai for professional legal work?",
    answer:
      "While LegalPlain.ai is a powerful tool for understanding legal documents, it's designed to complement, not replace, professional legal advice. We recommend using it alongside legal counsel for professional work.",
  },
  {
    question: "How often is LegalPlain.ai updated?",
    answer:
      "We regularly update LegalPlain.ai to improve accuracy, add new features, and ensure compatibility with the latest legal terminology and document formats. Updates are automatically installed through the Chrome Web Store.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about LegalPlain.ai.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-white">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
