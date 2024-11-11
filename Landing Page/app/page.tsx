import { Header } from "@/components/header";
import { BeforeAfterSection } from "@/components/sections/before-after";
import { FAQSection } from "@/components/sections/faq";
import { FeaturesSection } from "@/components/sections/features";
import { FooterSection } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { USPSection } from "@/components/sections/usp";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <BeforeAfterSection />
      <USPSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
