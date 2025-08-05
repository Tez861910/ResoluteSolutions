import { useState } from "react";
import { ContactModal } from "../components/common";
import {
  HeroSection,
  VerticalsSection,
  WhyRightChoiceSection,
  TrustedPartnersSection,
  CTASection,
} from "../components/home";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Verticals Section */}
      <VerticalsSection />

      {/* Why Right Choice Section */}
      <WhyRightChoiceSection />

      {/* Trusted Partners Section */}
      <TrustedPartnersSection />

      {/* CTA Section */}
      <CTASection onOpenModal={() => setIsModalOpen(true)} />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Ready to Transform Your Business?"
        subtitle="Tell us about your project and let's discuss how Resolute Solutions can help you achieve your goals"
        serviceType="General Inquiry"
        colorScheme="emerald-cyan"
      />
    </div>
  );
};

export default Home;
