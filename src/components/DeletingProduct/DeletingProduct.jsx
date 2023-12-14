import { useNavigate } from "react-router-dom";
import { useDeleteProductMutation } from "../../redux/productsSlice";

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
    <>
      <p>
        Ви впевнені, що хочете видалити товар <span>{name}</span>?
      </p>
      <ul>
        <li>
          <button
            type="button"
            //  onClick={() => navigate(`/catalog`)}
            onClick={toggleModal}
          >
            Скасувати
          </button>
        </li>
        <li>
          <button type="button" onClick={deleteSelectedProduct}>
            {isDeleting ? "..." : "видалити"}
          </button>
        </li>
      </ul>
    </>
  );
};
export default DeletingProduct;
