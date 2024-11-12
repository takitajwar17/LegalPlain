"use client";

import { Header } from "@/components/header";
import { PopupModal } from "@/components/PopupModal"; // Import the PopupModal
import { BeforeAfterSection } from "@/components/sections/before-after";
import { FAQSection } from "@/components/sections/faq";
import { FeaturesSection } from "@/components/sections/features";
import { FooterSection } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { USPSection } from "@/components/sections/usp";
import { useEffect, useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Set a timer to open the modal after 10 seconds
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 10000); // 10,000 milliseconds = 10 seconds

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
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

      {/* Popup Modal */}
      <PopupModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  );
}
