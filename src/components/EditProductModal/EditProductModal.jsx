import { useNavigate, useParams } from "react-router";
import { Formik, Form, Field } from "formik";
import {
  useGetProductByIdQuery,
  useGetProductsQuery,
  useUpdateProductMutation,
} from "../../redux/productsSlice";
import { CreateDeviceForm } from "../CreateDeviceForm/CreateDeviceForm";
import { Modal, Overlay } from "./EditProductModal.styled";

export const EditProductModal = ({ onSave }) => {
  let currentProduct = null;
  let initialValues = null;
  const navigate = useNavigate();
  const { productId } = useParams();
  //   const { data: product } = useGetProductByIdQuery(productId);
  const { data: products } = useGetProductsQuery();
  const [updateProduct] = useUpdateProductMutation();
  if (products) {
    currentProduct = products.find(({ id }) => id === productId);

    initialValues = {
      name: currentProduct.name,
      price: currentProduct.price,
    };
  }

  //const closeModal = () => navigate("/catalog");

  const handleUpdateProduct = async (data, { resetForm }) => {
    try {
      await updateProduct({ id: productId, ...data });
      resetForm();
      onSave();

      navigate("/catalog");
      //closeModal();
    } catch (error) {
      console.log(error);
    }
  };
  //  const handleSubmit = async (values, { resetForm }) => {
  //    const { img, name, title, price, category } = values;

  //    await addProduct({ img, name, title, price, category });
  //    onSave();
  //    resetForm();
  //  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleUpdateProduct}
      id={productId}
      // validationSchema={validationSchema}
    >
      {({ values, handleChange, handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <label>
            Name
            <Field
              type="text"
              name="name"
              onChange={handleChange}
              value={values.name}
            />
            {/* <ErrorMessage name="name" component="div" /> */}
          </label>
          <label>
            price
            <Field
              type="price"
              name="price"
              onChange={handleChange}
              value={values.price}
            />
            {/* <ErrorMessage name="number" component="div" /> */}
          </label>
          <button
            type="submit"
            disabled={isSubmitting}
            //onClick={() => navigate("/catalog")}
          >
            edit
            {/* {isSubmitting ? "..." : buttonLabel} */}
          </button>
        </Form>
      )}
    </Formik>
    // <>

    //     <CreateDeviceForm
    //       initialValues={{ name: product.neme, price: product.price }}
    //       btnText="Сохранить изменения"
    //       onSubmit={handleUpdateProduct}
    //     />
    // <Formik
    //   //mutator={updateProduct}
    //   // id={product.id}
    //   initialValues={{ title: product.title, price: product.price }}
    //   onSubmit={handleUpdateProduct}
    // >
    //   <Form>
    //     <label htmlFor="name">Name</label>
    //     <Field id="name" type="text" name="name" />

    //     <label htmlFor="price">Number</label>
    //     <Field id="price" type="price" name="price" />

    //     <button type="submit">Сохранить изменения</button>
    //   </Form>
    // </Formik>
  );
};

/* <button type="button" onClick={closeModal}>
        Закрыть
      </button> */

//     </>
