import React from "react";
import styles from "./StudentCard.module.css";

const StudentCardSmall = ({ value }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles["student-card-small"]}>
        <h1>
          {value[0].name} {value[0].surname}
        </h1>
        <h2>phone:{value[0].phone}</h2>
        <h2>{value[0].faculty}</h2>
        <h2>{value[0].address}</h2>
        <h2>{value[0].course} year of study</h2>
        <h2>{value[0].birthday}</h2>
        <h2>{value[0].age()} years</h2>
      </div>
    </div>
  );
};
export default StudentCardSmall;
