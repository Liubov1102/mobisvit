import { Input, Icon, Label } from "./Filter.styled";
import search from "../../img/search.svg";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filterSlicer";
import { useState } from "react";
import { useGetProductsQuery } from "../../redux/productsSlice";

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.value);
  // const filter = useSelector(getFilter);
  // const [searchTerm, setSearchTerm] = useState("");
  // const [queryTerm, setQueryTerm] = useState("");
  // const { isLoading, data } = useGetProductsQuery(searchTerm);
  // const handleSearch = () => {
  //   setQueryTerm(searchTerm);
  // };

  return (
    <>
      <Label>
        <Input
          type="search"
          value={filter}
          name="search"
          id="search"
          autoComplete="off"
          onChange={(e) => dispatch(setFilter(e.target.value))}
          // value={filter}
          // onChange={(e) => dispatch(changeFilter(e.target.value))}
          // value={searchTerm}
          // onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Icon src={search} alt="search" />
      </Label>
      {/* <button onClick={handleSearch}>search</button> */}
    </>
  );
};
