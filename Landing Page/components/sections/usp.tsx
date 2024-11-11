"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Brain, Shield, Users } from "lucide-react";

const usps = [
  {
    icon: Shield,
    title: "Privacy-Centric Design",
    description:
      "All processing is done locally in your browser. Your documents never leave your device.",
  },
  {
    icon: Brain,
    title: "Comprehensive AI Integration",
    description:
      "Leverages advanced AI models for accurate and reliable document simplification.",
  },
  {
    icon: Users,
    title: "User Empowerment",
    description:
      "Make informed decisions with a clear understanding of legal documents.",
  },
];

export function USPSection() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose LegalPlain.ai.ai?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our commitment to privacy, accuracy, and user empowerment sets us
            apart.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {usps.map((usp, index) => {
            const Icon = usp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="relative overflow-hidden h-full bg-gray-800">
                  <CardContent className="p-6">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#993ceb] to-transparent rounded-bl-full" />
                    <Icon className="h-12 w-12 text-[#993ceb] mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {usp.title}
                    </h3>
                    <p className="text-gray-300">{usp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
