"use client";
import { useModal } from "@/store/modalContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import CreateCompanyForm from "./modal-content/CreateCompanyForm";
import ValidateKycForm from "./modal-content/ValidateKycForm";
import CreateCreditForm from "./modal-content/CreateCreditForm";

const ReusableModal = () => {
  const { state, dispatch } = useModal();

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      dispatch({ type: "CLOSE_MODAL" });
    }
  };

  const renderModalContent = () => {
    switch (state.modalType) {
      case "createCompany":
        return <CreateCompanyForm />;
      case "validateKyc":
        return <ValidateKycForm />;
      case "createCredit":
        return <CreateCreditForm />;
      default:
        return null;
    }
  };

  return (
    <Dialog open={state.isModalOpen} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{state.modalType}</DialogTitle>
        </DialogHeader>
        {renderModalContent()}
      </DialogContent>
    </Dialog>
  );
};

export default ReusableModal;
