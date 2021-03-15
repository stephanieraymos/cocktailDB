import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  return (
    <>
    <section className="section search">
      <form action="" className="search-form">
        <div className="form-control">
          <label htmlFor="name">Search your favorite cocktail</label>
        </div>
      </form>
    </section>
      <h2>search form component</h2>
    </>
  );
};

export default SearchForm;
