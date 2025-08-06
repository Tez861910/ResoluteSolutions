import { useState, useEffect } from "react";
import ContactModal from "../components/common/ContactModal";
import {
  ProjectManagementHero,
  ProjectManagementServices,
  ProjectManagementBenefits,
  ProjectManagementProcess,
} from "../components/verticals/project-management";

const ProjectManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Listen for custom event from child components
  useEffect(() => {
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener("openContactModal", handleOpenModal);
    return () =>
      window.removeEventListener("openContactModal", handleOpenModal);
  }, []);

  return (
    <div>
      <ProjectManagementHero />
      <ProjectManagementServices />
      <ProjectManagementBenefits onOpenModal={() => setIsModalOpen(true)} />
      <ProjectManagementProcess />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Ready to Start Your Project?"
        subtitle="Let's discuss your project management needs and how we can help you achieve exceptional results"
        serviceType="Project Management"
        colorScheme="orange-pink"
      />
    </div>
  );
};

export default ProjectManagement;
