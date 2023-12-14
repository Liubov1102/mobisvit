import { useNavigate, useParams } from "react-router";
import {
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from "../../redux/productsSlice";
import { CreateDeviceForm } from "../CreateDeviceForm/CreateDeviceForm";
import useShowModal from "../../hooks/useModal";
//import Modal from "../Modal/Modal";
import { Modal, Overlay } from "./EditDevice.styled";

export const EditDevice = ({ onSave }) => {
  // const { showModal, toggleModal } = useShowModal(true);
  //  let initialValues = null;
  const { productId } = useParams();
  const { data: product } = useGetProductByIdQuery(productId);
  const [updateProduct] = useUpdateProductMutation();
  const navigate = useNavigate();
  //const closeModal = () => navigate("/catalog");
  // initialValues = {
  //   name: product.name,
  //   price: product.price,
  // };

  const handleUpdateProduct = async (data) => {
    try {
      await updateProduct({ id: productId, ...data });
      // closeModal();
      onSave();
      navigate("/catalog");

      // onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // <Overlay>
    //   <Modal>
    <>
      {product && (
        <CreateDeviceForm
          initialValues={{
            name: product.name,
            price: product.price,
            category: product.category,
            description: product.description,
          }}
          id={productId}
          btnText="Сохранить изменения"
          onSubmit={handleUpdateProduct}
        />
      )}

      {/* <button type="button" onClick={closeModal}>
        Закрыть
      </button> */}
    </>
    //   </Modal>
    // </Overlay>
  );
};
