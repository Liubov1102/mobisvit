import { useState } from "react";
import { useParams, useLocation, useNavigate, Link } from "react-router-dom";
import useShowModal from "../../hooks/useModal";
import { EditProduct } from "../../pages/EditProduct/EditProduct";
import {
  useDeleteProductMutation,
  useGetProductByIdQuery,
  useGetProductsQuery,
} from "../../redux/productsSlice";
// import { getProductById } from "../../fakeAPI";
import { BackLink } from "../BackLink/BackLink";
import DeletingProduct from "../DeletingProduct/DeletingProduct";
import { EditDevice } from "../EditDevice/EditDevice";
import { EditProductModal } from "../EditProductModal/EditProductModal";
import Modal from "../Modal/Modal";

import {
  Box,
  Description,
  Image,
  Label,
  Title,
  Wrapper,
} from "./DeviceDetails.styled";

// const ProductItem = ({ id }) => {
//   const { data: product } = useGetProductByIdQuery(id);
//   return (
//     <Box style={{ padding: "20px" }}>
//       <div>{JSON.stringify(product, null, 2)}</div>
//     </Box>
//   );
// };

const DeviceDetails = () =>
  //product
  // { id, img, name, title, price, category, description }
  {
    const { id } = useParams();
    const { data = [] } = useGetProductByIdQuery(id);
    // console.log("data :>> ", data);

    const { img, name, title, price, category, description } = data;

    // const { showModal, toggleModal } = useShowModal(false);
    const navigate = useNavigate();
    // const { productId } = useParams();
    // const { data: product } = useGetProductByIdQuery(productId);
    // const { data: products } = useGetProductsQuery();
    // if (products) {
    //   productOne = products.find(({ id }) => id === productId);
    //   product = {
    //     id: productOne.id,
    //     img: productOne.img,
    //     name: productOne.name,
    //     title: productOne.title,
    //     price: productOne.price,
    //     category: productOne.category,
    //     description:productOne.description,
    //   };
    // }
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const toggleModal = () => setIsModalOpen((state) => !state);
    const { showModal, toggleModal } = useShowModal(false);
    const location = useLocation();
    const goBack = location.state?.from ?? "/catalog";

    const [deleteProduct, { isLoading }] = useDeleteProductMutation();
    return (
      <>
        {showModal && (
          <Modal onClose={toggleModal}>
            <DeletingProduct id={id} name={name} toggleModal={toggleModal} />
            {/* <EditProductModal toggleModal={toggleModal} /> */}
          </Modal>
        )}
        <Box>
          <BackLink to={goBack}>повернутися назад</BackLink>
          <Wrapper>
            <Image
              src={
                img
                  ? img
                  : "https://upload.wikimedia.org/wikipedia/commons/0/07/Advanced_mobile_features_graphic.svg"
              }
              alt={name}
            />
            <Description>
              <Title>{name}</Title>
              <Title>{title}</Title>
              <Title>{price} грн.</Title>
              <Label>{category}</Label>
              <Label>{description}</Label>
              {/* <Label>Стандарт зв'язку:</Label>
          <Label>Оперативна пам'ять: </Label>
          <Label>Кількість SIM-карток:</Label> */}
            </Description>
          </Wrapper>
          <button
            type="button"
            onClick={toggleModal}
            // onClick={() => deleteProduct(id)}
            // disabled={isLoading}
            // navigate={"/catalog"}
          >
            Удалить
          </button>

          {/* <Link to={`/catalog/edit/${id}`}> */}
          <button
            type="button"
            onClick={() => navigate(`/catalog/edit/${id}`)}
            // onClick={toggleModal}
          >
            Редактировать
          </button>
          {/* </Link> */}
        </Box>
        {/* <ProductItem /> */}
      </>
    );
  };

export default DeviceDetails;

// {
//   isModalOpen && (
//     <Modal onClose={toggleModal}>
//       <DeletingProduct
//         id={id}
//         name={name}
//         toggleModal={toggleModal}
//       />
//       {/* <EditDevice onSave={toggleModal} /> */}
//     </Modal>
//   );
// }
