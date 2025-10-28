"use client"
import { createContext, useReducer, useContext, ReactNode } from "react";
import sectionReducer, { SectionState, SectionAction } from "./sectionReducer";

const initialState: SectionState = {
  currentSection: "kyc",
  kycData: {
    creditId: 0,
    riskLevel: "",
    pep: false,
  },
  signatureData: {
    documentHash: "",
    signedBy: "",
  },
};

const SectionContext = createContext<{
  state: SectionState;
  dispatch: React.Dispatch<SectionAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const SectionProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(sectionReducer, initialState);

  return (
    <SectionContext.Provider value={{ state, dispatch }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = () => useContext(SectionContext);
