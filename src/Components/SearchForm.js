import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  return (
    <>
      <h2>search form component</h2>
    </>
  );
};

export default SearchForm;
