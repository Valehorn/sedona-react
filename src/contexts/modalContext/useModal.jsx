import { useContext } from "react";
import { ModalContext } from "./modalContext.jsx";

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal должен быть внутри ModalProvider');
  }
  return context;
};
