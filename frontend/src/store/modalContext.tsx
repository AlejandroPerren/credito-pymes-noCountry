"use client"
import { createContext, useReducer, useContext, ReactNode } from "react";
import modalReducer, { ModalState, ModalAction } from "./modalReducer";

const initialState: ModalState = {
  isModalOpen: false,
  modalType: null,
};

const ModalContext = createContext<{
  state: ModalState;
  dispatch: React.Dispatch<ModalAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(modalReducer, initialState);

  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
