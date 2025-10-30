import { CreateKycAmlVerificationDto } from "@/backend/src/kyc-aml-verification/dto/create-kyc-aml-verification.dto";
import { CreateDigitalSignatureDto } from "@/backend/src/digital-signature/dto/create-digital-signature.dto";

export type Section = "kyc" | "signature";

export interface SectionState {
  currentSection: Section;
  kycData: CreateKycAmlVerificationDto;
  signatureData: CreateDigitalSignatureDto;
}

export type SectionAction =
  | { type: "SET_SECTION"; payload: Section }
  | { type: "SET_KYC_DATA"; payload: CreateKycAmlVerificationDto }
  | { type: "SET_SIGNATURE_DATA"; payload: CreateDigitalSignatureDto };

const sectionReducer = (state: SectionState, action: SectionAction): SectionState => {
  switch (action.type) {
    case "SET_SECTION":
      return {
        ...state,
        currentSection: action.payload,
      };
    case "SET_KYC_DATA":
      return {
        ...state,
        kycData: action.payload,
      };
    case "SET_SIGNATURE_DATA":
      return {
        ...state,
        signatureData: action.payload,
      };
    default:
      return state;
  }
};

export default sectionReducer;
