import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAddProductMutation } from "../../redux/productsSlice";
import { Button, Input, Label } from "./CreateDeviceForm.styled";

// export const CreateDeviceForm = () => {
//   const navigate = useNavigate();
//   const [addProduct] = useAddProductMutation();
//   // const [file, setFile] = useState("");

//   const handleSubmit = async (values, { resetForm }) => {
//     const { img, name, title, price, category } = values;

//     await addProduct({ img, name, title, price, category });
//     // onSave();
//     resetForm();
//     navigate("/catalog");
//   };

//   return (
//     <Formik
//       initialValues={{
//         img: "",
//         title: "",
//         name: " ",
//         price: " ",
//         category: " ",
//         description: " ",
//       }}
//       onSubmit={handleSubmit}
//     >
//       <Form>
//         <label>img</label>
//         <Field
//           type="img"
//           id="img"
//           name="img"
//           //   multiple
//           //   value={file}
//           //   onChange={(e) => setFile(e.target.value)}
//         />

//         <label htmlFor="name">Name</label>
//         <Field id="name" type="text" name="name" />

//         <label htmlFor="price">Number</label>
//         <Field id="price" type="price" name="price" />

//         <button type="submit">Add Contact</button>
//       </Form>
//     </Formik>
//   );
// };

export const CreateDeviceForm = ({
  initialValues = {
    img: " ",
    name: " ",
    price: " ",
    category: " ",
    description: " ",
  },
  onSubmit,
  btnText,
}) => {
  const navigate = useNavigate();
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
    navigate("/catalog");
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <Label htmlFor="name">
            назва
            <Input name="name" type="text" id="name" autoComplete="off" />
          </Label>

          <Label htmlFor="number">
            ціна
            <Input name="price" type="text" id="number" autoComplete="off" />
          </Label>
          <Label htmlFor="category">
            категорія
            <Input
              name="category"
              type="text"
              id="category"
              autoComplete="off"
            />
          </Label>
          <Label htmlFor="description">
            опис
            <Input
              name="description"
              type="text"
              id="description"
              autoComplete="off"
            />
          </Label>
          <br />
          <Button type="submit" disabled={isSubmitting}>
            {btnText}
          </Button>
        </Form>
      )}
    </Formik>
  );
};
