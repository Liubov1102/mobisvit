import { useLocation } from "react-router";
import { BackLink } from "../../components/BackLink/BackLink";
import { CreateDeviceForm } from "../../components/CreateDeviceForm/CreateDeviceForm";
import CreateProduct from "../../components/CreateProduct/CreateProduct";
import { useAddProductMutation } from "../../redux/productsSlice";

export const CreateDevice = () => {
  const [addProduct] = useAddProductMutation();

  const location = useLocation();
  const goBack = location.state?.from ?? "/catalog";

  const handleAddProduct = async (values) => {
    try {
      await addProduct(values);
      alert("Материал добавлен");
    } catch (error) {
      //  toast.error("Ошибка при добавлении материала");
      console.log(error);
    }
  };

  return (
    <>
      <BackLink to={goBack}>повернутися назад</BackLink>
      <CreateProduct
        // btnText="Добавить материал"
        onSubmit={handleAddProduct}
      />
      {/* <CreateProduct /> */}
    </>
  );
};
