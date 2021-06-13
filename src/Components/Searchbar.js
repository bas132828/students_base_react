import React from "react";
import styles from "./Searchbar.module.css";

const Searchbar = (props) => {
  const submissionHandler = (e) => {
    e.preventDefault();
    props.value(e.target.value.toLowerCase(), props.type);
    if (!e.target.value) props.searchModeHandler(true);
    if (e.target.value) props.searchModeHandler(false);
  };
  return (
    <form className={styles["search-form"]} onChange={submissionHandler}>
      <input
        type="text"
        placeholder={`Student's ${props.type.toLowerCase()}`}
      ></input>
    </form>
  );
};

export default Searchbar;
