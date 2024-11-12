"use client";

import { FirstPopupModal } from "@/components/firstPopupModal";
import { Header } from "@/components/header";
import { SecondPopupModal } from "@/components/secondPopupModal";
import { BeforeAfterSection } from "@/components/sections/before-after";
import { FAQSection } from "@/components/sections/faq";
import { FeaturesSection } from "@/components/sections/features";
import { FooterSection } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { USPSection } from "@/components/sections/usp";
import { useEffect, useRef, useState } from "react";

const Home: React.FC = () => {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState<boolean>(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState<boolean>(false);

  // Refs to store timer IDs for cleanup
  const firstTimerRef = useRef<number | null>(null);
  const secondTimerRef = useRef<number | null>(null);

  useEffect(() => {
    // Start the first timer for 15 seconds
    firstTimerRef.current = window.setTimeout(() => {
      setIsFirstModalOpen(true);
    }, 15000); // 15,000 milliseconds = 15 seconds

    // Cleanup function to clear timers if component unmounts
    return () => {
      if (firstTimerRef.current !== null) {
        clearTimeout(firstTimerRef.current);
      }
      if (secondTimerRef.current !== null) {
        clearTimeout(secondTimerRef.current);
      }
    };
  }, []);

  const handleCloseFirstModal = () => {
    setIsFirstModalOpen(false);

    // Start the second timer for 30 seconds after first modal is closed
    secondTimerRef.current = window.setTimeout(() => {
      setIsSecondModalOpen(true);
    }, 30000); // 30,000 milliseconds = 30 seconds
  };

  const handleCloseSecondModal = () => {
    setIsSecondModalOpen(false);
    // No further modals to open
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <BeforeAfterSection />
      <USPSection />
      <FeaturesSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <FAQSection />
      <FooterSection />

      {/* First Popup Modal */}
      {isFirstModalOpen && (
        <FirstPopupModal
          isOpen={isFirstModalOpen}
          onClose={handleCloseFirstModal}
        />
      )}

      {/* Second Popup Modal */}
      {isSecondModalOpen && (
        <SecondPopupModal
          isOpen={isSecondModalOpen}
          onClose={handleCloseSecondModal}
        />
      )}
    </main>
  );
};

export default Home;
