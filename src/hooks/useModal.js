// import { useState } from "react";

// export const useModal = (initialState = false) => {
//   const [isModalOpen, setIsModalOpen] = useState(initialState);
//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);
//   return { isModalOpen, openModal, closeModal };
// };
import { useState } from "react";

const useShowModal = (option) => {
  const [showModal, setShowModal] = useState(option);
  const toggleModal = () => setShowModal((prevState) => !prevState);

  return { toggleModal, showModal };
};

export default useShowModal;
