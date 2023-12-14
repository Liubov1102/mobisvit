import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { EditProduct } from "../../pages/EditProduct/EditProduct";
import { getFilter } from "../../redux/filterSlicer";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../redux/productsSlice";
import { CreateDeviceForm } from "../CreateDeviceForm/CreateDeviceForm";
import DeviceDetails from "../DeviceDetails/DeviceDetails";
import { EditProductModal } from "../EditProductModal/EditProductModal";
import Modal from "../Modal/Modal";
import { Filter, SearchBox } from "../Filter/Filter";
import {
  Container,
  CardWrapper,
  ProductName,
  Box,
  ProductPrice,
} from "./Device.styled";
import Loader from "../Loader/Loader";

export const Device = ({ items = [], ...otherProps }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isFetching } = useGetProductsQuery();
  // console.log("data :>> ", data);
  // const filter = useSelector(getFilter);
  // const { filter } = useSelector((state) => getFilter(state));
  // const filterProducts = products?.filter(
  //   (product) =>
  //     product.name.toLowerCase().includes(filter.toLowerCase()) ||
  //     product.category.name.toLowerCase().includes(filter.toLowerCase())
  // );
  // const [deleteProduct, { isLoading }] = useDeleteProductMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen((state) => !state);

  // const sortedProducts = items && [...items].sort((a, b) => a.price - b.price);

  //   const [searchParams, setSearchParams] = useSearchParams();
  // const productName = searchParams.get("name") ?? "";

  //   const updateQueryString = (name) => {
  //   const nextParams = name !== "" ? { name } : {};
  //   setSearchParams(nextParams);
  // };
  return (
    <Box>
      {/* {isFetching && <Loader />} */}
      {/* <button
        type="button"
        // onClick={toggleModal}
        // onClick={() => navigate("/create")}
      >
        Добавить материал
      </button> */}
      {/* <Filter /> */}

      <Container>
        {items?.map((item) => (
          <CardWrapper key={item.id} {...otherProps}>
            <Link
              to={`/catalog/${item.id}`}

              //to={`${id}`}
              // state={{ from: location }}
            >
              {/* <DeviceDetails
              //  item={item}

              key={id}
              id={id}
              img={img}
              title={title}
              name={name}
              category={category}
              price={price}
              // description={description}
              {...otherProps}
            /> */}
              <img src={item.img} alt="" width={"150"} />
              <ProductName>{item.title}</ProductName>
              <ProductName>{item.name}</ProductName>
              <ProductName>{item.category}</ProductName>
              <ProductPrice>{item.price} грн.</ProductPrice>
            </Link>
            {/* <button
                //  style={{ display: "none" }}
                type="button"
                onClick={() => deleteProduct(id)}
                disabled={isLoading}
              >
                Удалить
              </button>
              <button
                type="button"
                onClick={toggleModal}
                // onClick={() => navigate(`/catalog/edit/${id}`)}
              >
                Редактировать
              </button> */}

            {/* {isModalOpen && (
                <Modal onClose={toggleModal}>
                  <EditProductModal
                    onSave={toggleModal}
                    // onClick={toggleModal}
                  />
                </Modal>
              )} */}
            {/* {isModalOpen && (
                <Modal onClose={toggleModal}>
                  <CreateDeviceForm onSave={toggleModal} />
                </Modal>
              )} */}
          </CardWrapper>
        ))}
      </Container>
    </Box>
  );
};
