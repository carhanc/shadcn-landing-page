import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "TD Auto Repair | Sunnyvale Auto Repair Shop",
  description:
    "Family-owned TD Auto Repair keeps Sunnyvale drivers on the road with honest diagnostics, expert repairs, and friendly service.",
  openGraph: {
    type: "website",
    url: "https://tdautorepair-sunnyvale.com",
    title: "TD Auto Repair | Sunnyvale Auto Repair Shop",
    description:
      "Schedule maintenance, repairs, or diagnostics with TD Auto Repair in Sunnyvale, CA.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Technician inspecting a vehicle at TD Auto Repair",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TD Auto Repair | Sunnyvale Auto Repair Shop",
    description:
      "Maintenance, repairs, and diagnostics from ASE-certified technicians in Sunnyvale, CA.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialSection />
      <TeamSection />
      <CommunitySection />
      <PricingSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
