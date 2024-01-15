import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
// import { useSelector } from 'react-redux';
// import { getFilter } from 'redux/filterSlicer';

// import Data, { getProducts } from "../../fakeAPI";
// import { getTypes } from "../../fakeAPI";
import { Device } from "../../components/Device/Device";
// import { Wrapper } from '../Servis/Servis.styled'
// import { SearchBox } from "../../components/SearchBox/SearchBox";
// import TypeBar from "../../components/CategoryBar/CategoryBar";
import { Wrapper } from "./Catalog.styled";
// import { useState } from "react";
import { useGetProductsQuery } from "../../redux/productsSlice";
import { useSelector } from "react-redux";
import { useMemo, useState } from "react";
//import { createSelector } from "reselect";
import { createSelector } from "@reduxjs/toolkit";
import { Filter } from "../../components/Filter/Filter";
import Loader from "../../components/Loader/Loader";
import Pagination from "../../components/Pagination/Pagination";
import ReactPaginate from "react-paginate";
import { createGlobalStyle, styled } from "styled-components";
import { StyledLink } from "../../components/BackLink/BackLink.styled";
import { Item, List } from "../../components/Pagination/Pagination.styled";

const useProducts = () => {
  const filter = useSelector((state) => state.filter.value);
  const { data: products = [] } = useGetProductsQuery();

  const selectFilteredProducts = useMemo(() => {
    return createSelector(
      [(response) => response.data, (_, filter) => filter],
      (products, filter) => {
        return (
          products?.filter(
            (p) =>
              p.name.toLowerCase().includes(filter.toLowerCase()) ||
              p.category.toLowerCase().includes(filter.toLowerCase())
          ) ?? []
        );
      }
    );
  }, []);

  return useGetProductsQuery(undefined, {
    selectFromResult(result) {
      return {
        ...result,
        filteredProducts: selectFilteredProducts(result, filter),
      };
    },
  });
};

const Catalog = () => {
  // const { data: products } = useGetProductsQuery();
  const [page, setPage] = useState(1);
  const [prodPage] = useState(4);
  const navigate = useNavigate();
  const { filteredProducts, isLoading, error, isFetching } = useProducts(page);
  //const totalProducts=
  // const total_pages = Math.ceil(filteredProducts?.length / prodPage);
  const lastIndex = page * prodPage;
  const firstIndex = lastIndex - prodPage;
  const currentProduct = filteredProducts.slice(firstIndex, lastIndex);
  // const paginate = (pageNum) => setPage(pageNum);

  // console.log(lastIndex);
  // console.log(prodPage);
  //     const products = getProducts();

  //   const [searchParams, setSearchParams] = useSearchParams();
  //     const productName = searchParams.get("name") ?? "";

  //   const visibleProducts = Data.filter((product) =>
  //       product.name.toLowerCase().includes(productName.toLowerCase())
  //       ||
  //       product.category.name.toLowerCase().includes(productName.toLowerCase())
  //   );

  //       const visibleTypes = types.filter((type) =>
  //     type.nameT.toLowerCase().includes(typeName.toLowerCase())
  //   );

  //   const updateQueryString = (name) => {
  //     const nextParams = name !== "" ? { name } : {};
  //     setSearchParams(nextParams);
  //   };

  //   const [item, setItem] = useState(Data);

  //   const menuItems = [...new Set(Data.map((product) => product.category.name))];

  //   const filterItem = (curcat) => {
  //       const newItem = Data.filter((newVal) => {
  //     console.log(curcat)
  //       return newVal.category.name === curcat;
  //     });
  //     setItem(newItem);
  //   };
  return (
    <Wrapper>
      <Filter />
      {/* <div>
        <div>Total Products</div>
        <div>{`${filteredProducts?.length || "NA"}`}</div>
      </div>
      <div>
        <button
          onClick={() => setPage((prev) => prev - 1)}
           isLoading={isFetching}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setPage(page + 1)}
            isLoading={isFetching}
          disabled={page === total_pages}
        >
          Next
        </button>
        <div>{`${page} / ${total_pages}`}</div>
      </div> */}

      {/* <TypeBar
            //    action={filterItem.action}
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems} /> */}
      {/* <SearchBox value={productName} onChange={updateQueryString} /> */}
      {isLoading ? <Loader /> : <Device items={currentProduct} />}
      {/* {currentProduct && currentProduct.length > 0 ? (
        <Device items={currentProduct} />
      ) : (
        <div>По вашому запиту нічого не знайдено. Уточніть свій запит</div>
      )} */}
      {/* <Outlet /> */}
      <Pagination
        onChangePage={(pageNum) => setPage(pageNum)}
        totalProducts={filteredProducts?.length}
        //  prodPage={prodPage}
        //  paginate={paginate}
        active={{ page }}
      />
    </Wrapper>
  );
};

export default Catalog;

{
  /* <link rel="icon" type="image/png" sizes="16x16"  href="/favicons/favicon-16x16.png">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="theme-color" content="#ffffff"></meta> */
}
