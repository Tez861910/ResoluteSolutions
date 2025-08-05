// Master Components Index
// This file exports all components from their respective folders for easy importing

// Common Components
export * from "./common";

// Home Page Components
export * from "./home";

// Vertical Page Components
export * from "./verticals";

// Re-export individual components for backward compatibility
export { ContactModal, ContactForm, Layout, Logo } from "./common";
export {
  HeroSection,
  VerticalsSection,
  WhyRightChoiceSection,
  TrustedPartnersSection,
  CTASection,
} from "./home";
