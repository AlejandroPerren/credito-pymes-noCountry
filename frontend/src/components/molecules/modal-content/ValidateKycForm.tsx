"use client";
import { useSection } from "@/store/sectionContext";
import KycForm from "./KycForm";
import SignatureForm from "./SignatureForm";

const ValidateKycForm = () => {
  const { state } = useSection();

  return (
    <div>
      {state.currentSection === "kyc" ? <KycForm /> : <SignatureForm />}
    </div>
  );
};

export default ValidateKycForm;