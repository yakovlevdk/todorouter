import { useState } from "react";

export const useOpenModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModalWindow = () => {
    setIsOpen(true);
  };

  return { handleOpenModalWindow, isOpen, setIsOpen };
};
