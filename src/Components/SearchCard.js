import styles from "./SearchCard.module.css";

const SearchCard = (props) => {
  const switchSearchHandler = (e) => {
    props.searchMethod(e.target.textContent.slice(0, -7));

    Array.from(e.target.parentElement.children).forEach(
      (el) => (el.style.backgroundColor = "rgb(113, 153, 212)")
    );

    e.target.style.backgroundColor = "cadetblue";
  };

  return (
    <div
      className={styles["search-card"]}
      style={{ backgroundColor: props.color }}
      onClick={switchSearchHandler}
    >
      {props.text}
    </div>
  );
};

export default SearchCard;
