import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const examples = [
  {
    before:
      "The aforementioned parties hereby agree that any dispute arising out of or relating to this Agreement shall be subject to binding arbitration in accordance with the Commercial Arbitration Rules...",
    after:
      "If we have a disagreement about this agreement, we'll resolve it through arbitration (an independent mediator) instead of going to court.",
    label: "Arbitration Clause",
  },
  {
    before:
      "The Licensee hereby acknowledges and agrees that all intellectual property rights, including but not limited to patents, trademarks, copyrights, and trade secrets...",
    after:
      "You agree that we own all the intellectual property (like patents, trademarks, and copyrights) related to our service.",
    label: "Intellectual Property Rights",
  },
  {
    before:
      "This agreement shall commence on the Effective Date and continue in full force and effect until terminated by either party upon thirty (30) days prior written notice...",
    after:
      "This agreement starts now and lasts until either of us ends it with 30 days' notice.",
    label: "Termination Clause",
  },
];

export const BeforeAfter: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBefore, setShowBefore] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowBefore((prev) => !prev);
    }, 5000); // Switch between before and after every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const indexInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % examples.length);
      setShowBefore(true);
    }, 10000); // Move to next example every 10 seconds

    return () => clearInterval(indexInterval);
  }, []);

  const { before, after, label } = examples[currentIndex];

  return (
    <section
      id="demo"
      className="py-32 px-6 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-5xl font-bold mb-12 text-white">
          Witness the Transformation
        </h2>
        <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-10 shadow-xl">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm">
            {label}
          </div>
          <AnimatePresence exitBeforeEnter>
            {showBefore ? (
              <motion.div
                key="before"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-red-400 font-semibold mb-4 text-xl">
                  Before
                </div>
                <p className="text-white/70 text-lg leading-relaxed italic">
                  "{before}"
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="after"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-green-400 font-semibold mb-4 text-xl">
                  After
                </div>
                <p className="text-white text-2xl leading-relaxed">"{after}"</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="mt-8 text-white/70 text-sm">
          The text alternates automatically to show how PlainLegal simplifies
          legal language.
        </div>
      </div>
    </section>
  );
};
