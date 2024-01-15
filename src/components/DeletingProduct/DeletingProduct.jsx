import { useNavigate } from "react-router-dom";
import { useDeleteProductMutation } from "../../redux/productsSlice";
import { Wrapper } from "../DeviceDetails/DeviceDetails.styled";
import { Box } from "../Auth/RegisterForm.styled";
import { Button } from "../ui/Button";
import { Span, Text } from "./DeletingProduct.styled";
//import { Box } from "./DeletingProduct.styled";

// function useDeletingContact(id, name, toggleModal) {
//   const navigate = useNavigate();
//   const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

//   const deleteSelectedContact = () => {
//     deleteContact(id);
//     navigate("/contacts");
//     toggleModal();
//     alert.success(`The ${name} has been removed from your contact list.`);
//   };

//   return { isDeleting, deleteSelectedContact };
// }

const DeletingProduct = ({ id, name, toggleModal }) => {
  //   const { isDeleting, deleteSelectedContact } = useDeletingContact(
  //     id,
  //     name,
  //     toggleModal
  //   );

  const navigate = useNavigate();
  const [deleteProduct, { isLoading: isDeleting }] = useDeleteProductMutation();

  const deleteSelectedProduct = () => {
    deleteProduct(id);
    navigate("/catalog");
    toggleModal();
    //alert(`The ${name} has been removed from your contact list.`);
  };

  //      return { isDeleting, deleteSelectedProduct };
  //    }
  //const closeModal = () => navigate("/catalog");
  //   navigate("/catalog");
  //   toggleModal();
  // alert(`The ${name} has been removed from your contact list.`);
  return (
    <Box>
      <p>Ви впевнені, що хочете видалити товар</p>
      <Text>{name} ?</Text>
      <Wrapper>
        <Button
          type="button"
          //  onClick={() => navigate(`/catalog`)}
          onClick={toggleModal}
        >
          cкасувати
        </Button>

        <Button type="button" onClick={deleteSelectedProduct}>
          {isDeleting ? "..." : "видалити"}
        </Button>
      </Wrapper>
    </Box>
  );
};
export default DeletingProduct;
