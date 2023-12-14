import { useState } from "react";
import { useNavigate } from "react-router";
import { Wrapper } from "../../pages/Catalog/Catalog.styled";
import { useAddProductMutation } from "../../redux/productsSlice";
import { Box } from "../Auth/RegisterForm.styled";
import { CreateDeviceForm } from "../CreateDeviceForm/CreateDeviceForm";

export default function CreateProduct() {
  const navigate = useNavigate();
  //   const [product, setProduct] = useState({
  //     name: "",
  //     price: "",
  //   });
  const [addProduct] = useAddProductMutation();

  const handleAddProduct = async (values) => {
    try {
      await addProduct(values);
      // console.log("values :>> ", values);
      alert("Материал добавлен");
    } catch (error) {
      //  toast.error("Ошибка при добавлении материала");
      console.log(error);
    }
  };

  return (
    <Box>
      {/* <BackLink href="/list" label="К списку материалов" /> */}
      <CreateDeviceForm btnText="Додати товар" onSubmit={handleAddProduct} />
    </Box>
  );

  //   const defaultVelue = {
  //     name: "",
  //     price: "",
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // addProduct(product).then(() => {
  //     //   setProduct(defaultVelue);
  //     // });
  //     addProduct(product);
  //     navigate("/catalog");
  //   };
  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <label>
  //         name
  //         <input
  //           type="text"
  //           value={product.name}
  //           onChange={(e) => setProduct({ ...product, name: e.target.value })}
  //         />
  //       </label>
  //       <label>
  //         price
  //         <input
  //           type="text"
  //           value={product.price}
  //           onChange={(e) => setProduct({ ...product, price: e.target.value })}
  //         />
  //       </label>
  //       <button type="submit">create</button>
  //     </form>
  //   );
}
