import HeroSection from "@/components/home/HeroSection";
import StorySection from "@/components/home/StorySection";
import StatsTicker from "@/components/home/StatsTicker";
import ServicesSection from "@/components/home/ServicesSection";
import TalentShowcase from "@/components/home/TalentShowcase";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import GlobalReachSection from "@/components/home/GlobalReachSection";
import CTASection from "@/components/home/CTASection";
import GlowDivider from "@/components/shared/GlowDivider";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StorySection />
      <StatsTicker />
      <ServicesSection />
      <GlowDivider className="my-0" />
      <TalentShowcase />
      <HowItWorksSection />
      <TestimonialsSection />
      <GlobalReachSection />
      <CTASection />
    </>
  );
}
