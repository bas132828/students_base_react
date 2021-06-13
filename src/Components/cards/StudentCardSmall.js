import React from "react";
import styles from "./StudentCard.module.css";

const StudentCardSmall = ({ value }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles["student-card-small"]}>
        <div className={styles.item}>
          <img src={value.img} alt=""></img>
        </div>
        <div className={styles.item}>
          <h1>
            {value.name} {value.surname}
          </h1>
          <h2>phone:{value.phone}</h2>
          <h2>{value.faculty}</h2>
          <h2>{value.address}</h2>
          <h2>{value.course} year of study</h2>
          <h2>{value.birthday}</h2>
          <h2>{value.age()} years</h2>
        </div>
        <div className={styles.activeEm}>{value.active ? "🐢" : "🦀"}</div>
      </div>
    </div>
  );
};
export default StudentCardSmall;
