import React, { useState } from "react";
import "./SearchCard.css";

const SearchCard = (props) => {
  // const [searchMode, setSearchMode] = useState('');
  const switchSearchHandler = (e) => {
    e.target.style.backgroundColor = "cadetblue";
  };

  return (
    <div className="search-card" onClick={switchSearchHandler}>
      {props.text}
    </div>
  );
};

export default SearchCard;
