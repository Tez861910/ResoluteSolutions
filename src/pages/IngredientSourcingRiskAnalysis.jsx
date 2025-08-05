import { useState } from "react";
import { ContactModal } from "../components/common";
import {
  IngredientSourcingHero,
  IngredientSourcingServices,
  IngredientSourcingBenefits,
  IngredientSourcingCTA,
} from "../components/verticals/ingredient-sourcing";

const IngredientSourcingRiskAnalysis = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <IngredientSourcingHero />

      {/* Services Section */}
      <IngredientSourcingServices />

      {/* Benefits Section */}
      <IngredientSourcingBenefits />

      {/* CTA Section */}
      <IngredientSourcingCTA onOpenModal={() => setIsModalOpen(true)} />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Optimize Your Supply Chain & Risk Management"
        subtitle="Let's discuss how we can strengthen your ingredient sourcing and build comprehensive risk management strategies"
        serviceType="Ingredient Sourcing & Risk Management Analysis"
        colorScheme="yellow-red"
      />
    </div>
  );
};

export default IngredientSourcingRiskAnalysis;
