"use client";

import { Card } from "@/components/ui/card";
import { Brain, Sparkles } from "lucide-react";

interface Example {
  before: string;
  after: string;
  label: string;
}

const examples: Example[] = [
  {
    before: "The aforementioned parties hereby agree that any dispute arising out of or relating to this Agreement shall be subject to binding arbitration in accordance with the Commercial Arbitration Rules...",
    after: "If we have a disagreement about this agreement, we'll resolve it through arbitration (an independent mediator) instead of going to court.",
    label: "Arbitration Clause"
  },
  {
    before: "The Licensee hereby acknowledges and agrees that all intellectual property rights, including but not limited to patents, trademarks, copyrights, and trade secrets...",
    after: "You agree that we own all the intellectual property (like patents, trademarks, and copyrights) related to our service.",
    label: "Intellectual Property Rights"
  },
  {
    before: "This agreement shall commence on the Effective Date and continue in full force and effect until terminated by either party upon thirty (30) days prior written notice...",
    after: "This agreement starts now and lasts until either of us ends it with 30 days' notice.",
    label: "Termination Clause"
  }
];

export function BeforeAfter() {
  return (
    <div className="grid gap-8">
      {examples.map((example, index) => (
        <div key={index} className="grid md:grid-cols-2 gap-6">
          <Card className="p-8 bg-white/5 backdrop-blur border-white/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Sparkles className="mr-2 h-6 w-6 text-purple-400" />
              Before
            </h3>
            <p className="text-white/60 font-mono text-sm leading-relaxed relative z-10">
              {example.before}
            </p>
            <div className="absolute bottom-4 right-4 text-xs text-white/40">
              {example.label}
            </div>
          </Card>

          <Card className="p-8 bg-white/5 backdrop-blur border-white/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Brain className="mr-2 h-6 w-6 text-purple-400" />
              After
            </h3>
            <p className="text-white/60 font-mono text-sm leading-relaxed relative z-10">
              ✨ {example.after}
            </p>
            <div className="absolute bottom-4 right-4 text-xs text-white/40">
              {example.label}
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}