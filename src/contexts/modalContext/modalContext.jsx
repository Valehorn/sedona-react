import { createContext, useState, useEffect } from 'react';

const ModalContext = createContext();

function ModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const pageContainer = document.querySelector('.page-container');
    if (!pageContainer) return;

    if (isModalOpen) {
      pageContainer.setAttribute('inert', '');
    } else {
      pageContainer.removeAttribute('inert');
    }

    return () => {
      pageContainer.removeAttribute('inert');
    };
  }, [isModalOpen]);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export { ModalProvider, ModalContext };
