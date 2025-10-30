export type ModalType = "createCompany" | "validateKyc" | "createCredit" | "logoutUser";

export interface ModalState {
  isModalOpen: boolean;
  modalType: ModalType | null;
}

export type ModalAction = 
  | { type: "OPEN_MODAL"; payload: ModalType } 
  | { type: "CLOSE_MODAL" };

const modalReducer = (state: ModalState, action: ModalAction): ModalState => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        isModalOpen: true,
        modalType: action.payload,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        isModalOpen: false,
        modalType: null,
      };
    default:
      return state;
  }
};

export default modalReducer;
