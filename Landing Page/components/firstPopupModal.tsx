"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Chrome } from "lucide-react";
import { useEffect } from "react";

interface PopupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FirstPopupModal({ isOpen, onClose }: PopupModalProps) {
  // Prevent scrolling when the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[#111827] border border-[#c38ef8] rounded-lg shadow-xl max-w-lg w-full p-10 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 focus:outline-none"
              aria-label="Close Popup"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Content */}
            <div className="text-center space-y-6">
              <h2 className="text-2xl font-bold text-white text-center">
                Legal Pain 😢 or LegalPlain.ai? 🤔
              </h2>
              <p className="text-gray-300 text-sm">
                Simplify your legal documents effortlessly with our AI-powered
                tool.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-2">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:from-purple-600 hover:to-indigo-700 rounded-full flex items-center justify-center w-full sm:w-auto px-4 py-2"
                  onClick={() => {
                    // Redirect to Chrome Web Store extension link
                    window.open(
                      "https://chrome.google.com/webstore/detail/your-extension-id",
                      "_blank"
                    );
                    onClose(); // Close the modal after opening the link
                  }}
                >
                  <Chrome className="mr-2 h-5 w-5" />
                  Yes, add it to Chrome
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-[#111827] text-gray-200 hover:bg-gray-800 rounded-full flex items-center justify-center w-full sm:w-auto px-4 py-2"
                  onClick={onClose}
                >
                  I want to explore more
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
