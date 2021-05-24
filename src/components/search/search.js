import React from "react";
import styles from "./search.module.css";

const Search = ({ setSearch }) => {
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className={styles.root}>
      <input
        aria-label="search"
        className="form-control"
        placeholder="filter meds"
        type="search"
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default Search;
