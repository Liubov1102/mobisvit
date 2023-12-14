// import { useState } from "react";
// //import { useProduct } from "../../pages/Catalog";
// import { useGetProductsQuery } from "../../redux/productsSlice";
// import { Link } from "../ui/Link";
// import { Button, List } from "./Pagination.styled";

// const Pagination = ({ filteredProducts, totalProducts }) => {
//   // const { filteredProducts, isLoading, error, isFetching } = useProduct(page);
//   const { data: products } = useGetProductsQuery();
//   const [page, setPage] = useState(1);
//   const [prodPage] = useState(4);
//   const pageNum = [];
//   const total_pages = Math.ceil(totalProducts / prodPage);
//   const paginate = (pageNum) => setPage(pageNum);

//   for (let i = 0; i < total_pages; i++) {
//     pageNum.push(i + 1);
//   }
//   return (
//     <div>
//       <List>
//         {pageNum.map((num) => (
//           <li
//             key={num}
//             style={{ active: { color: "red" } }}
//             // active={device.page === page}
//             //  onClick={() => setPage(pageNum)}
//           >
//             <Button onClick={() => paginate(num)}>{num}</Button>
//           </li>
//         ))}
//       </List>
//     </div>
//   );
// };
// export default Pagination;

import { useState } from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css";

const Pagination = ({ onChangePage, totalProducts }) => {
  // const { data: products } = useGetProductsQuery();
  //   const { filteredProducts, isLoading, error, isFetching } =
  //     useGetProductsQuery();
  // const [page, setPage] = useState(1);
  const [prodPage] = useState(4);
  const total_pages = Math.ceil(totalProducts / prodPage);
  // const lastIndex = page * prodPage;
  // const firstIndex = lastIndex - prodPage;
  // const currentProduct = filteredProducts.slice(firstIndex, lastIndex);
  // const paginate = (pageNum) => setPage(pageNum);
  //   const handlePageChange = (event) => {
  //     const newOffset = (event.selected * prodPage) % filteredProducts?.length;
  //     console.log(
  //       `User requested page number ${event.selected}, which is offset ${newOffset}`
  //     );
  //     console.log(event);
  //     // setItemOffset(newOffset);
  //     //setPageOffset(event.selected);
  //   };
  return (
    <ReactPaginate
      containerClassName="list"
      pageClassName="item"
      pageLinkClassName="link"
      previousLinkClassName="link_prev"
      nextLinkClassName="link_next"
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={total_pages}
      activeClassName="active"
      //   forcePage={page - 1}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
