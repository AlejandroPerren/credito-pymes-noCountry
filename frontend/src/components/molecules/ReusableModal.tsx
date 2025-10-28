"use client";
import { useModal } from "@/store/modalContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import CreateCompanyForm from "./modal-content/CreateCompanyForm";
import ValidateKycForm from "./modal-content/ValidateKycForm";
import CreateCreditForm from "./modal-content/CreateCreditForm";
import { SectionProvider } from "@/store/sectionContext";
import { Button } from "../ui/button";

const ReusableModal = () => {
  const { state, dispatch } = useModal();

  const renderModalContent = () => {
    switch (state.modalType) {
      case "createCompany":
        return <CreateCompanyForm />;
      case "validateKyc":
        return (
          <SectionProvider>
            <ValidateKycForm />
          </SectionProvider>
        );
      case "createCredit":
        return <CreateCreditForm />;
      default:
        return null;
    }
  };

  return (
    <Dialog open={state.isModalOpen}>
      <DialogContent onInteractOutside={(e) => e.preventDefault()} showCloseButton={false}>
        <DialogHeader>
          {state.modalType === "createCompany" && <DialogTitle>Registrar Compañía</DialogTitle>}
          {state.modalType === "createCredit" && <DialogTitle>Solicitar Crédito</DialogTitle>}
          {state.modalType === "validateKyc" && <DialogTitle>Verificar Identidad</DialogTitle>}
          <Button className="absolute top-0 right-0" variant="ghost" onClick={() => dispatch({ type: "CLOSE_MODAL" })}>
            X
          </Button>
        </DialogHeader>
        {renderModalContent()}
      </DialogContent>
    </Dialog>
  );
};

export default ReusableModal;
