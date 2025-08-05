import { useState } from "react";
import { ContactModal } from "../components/common";
import {
  HouseKeepingHero,
  HouseKeepingServices,
  HouseKeepingProductsCatalogue,
  HouseKeepingBenefits,
  HouseKeepingProcess,
} from "../components/verticals/housekeeping";

const HouseKeepingProducts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <HouseKeepingHero />

      {/* Services Section */}
      <HouseKeepingServices />

      {/* Benefits Section */}
      <HouseKeepingBenefits onOpenModal={() => setIsModalOpen(true)} />

      {/* Process Section */}
      <HouseKeepingProcess />

      {/* House Keeping Products Catalogue Section */}
      <HouseKeepingProductsCatalogue />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Optimize Your Product Portfolio"
        subtitle="Let's discuss how our house keeping products expertise can maximize your product lifecycle value"
        serviceType="House Keeping Products"
        colorScheme="blue-purple"
      />
    </div>
  );
};

export default HouseKeepingProducts;
