import { useLocation } from "react-router";
import { BackLink } from "../../components/BackLink/BackLink";
import { EditProductModal } from "../../components/EditProductModal/EditProductModal";
import {
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from "../../redux/productsSlice";

export const EditProduct = () => {
  const location = useLocation();
  const goBack = location.state?.from ?? "/catalog";

  //   const handleAddProduct = async (values) => {
  //     try {
  //       await addProduct(values);
  //       //  toast.success("Материал добавлен");
  //     } catch (error) {
  //       //  toast.error("Ошибка при добавлении материала");
  //       console.log(error);
  //     }
  //   };

  return (
    <>
      <BackLink to={goBack}>повернутися назад</BackLink>
      <EditProductModal />
    </>
  );
};
