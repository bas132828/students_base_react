import React, { useState } from "react";
import styles from "./App.module.css";
import Searchbar from "./Components/Searchbar";
import SearchCard from "./Components/SearchCard";
import StudentCardSmall from "./Components/cards/StudentCardSmall";

function App() {
  const [searchMode, setSearchMode] = useState(true);
  const [filtered, setFiltered] = useState([]);
  const [selectedType, setSelectedType] = useState("Name");
  const students = [
    {
      id: 0,
      img: "../images/hammach.jpeg",
      name: "Hammach",
      surname: "Yassine",
      phone: "+79622373468",
      address: "Sovenstkaya 31, ap.32",
      faculty: "general medicine",
      course: 4,
      country: "Maroc",
      birthday: "05-02-1991",
      group: "301ф",
      active: true,
      age() {
        return new Date().getFullYear() - +this.birthday.slice(-4);
      },
    },
    {
      id: 32,
      img: "../images/hammmach.png",
      name: "Hammmach",
      surname: "Yassine",
      phone: "+79622373468",
      address: "Sovenstkaya 31, ap.32",
      faculty: "general medicine",
      course: 4,
      country: "Tunisia",
      birthday: "05-02-1991",
      group: "301ф",
      active: true,

      age() {
        return new Date().getFullYear() - +this.birthday.slice(-4);
      },
    },
    {
      id: 342,
      img: "../images/hamach.jpeg",
      name: "Hamach",
      surname: "Yassine",
      phone: "+79622373468",
      address: "Sovenstkaya 31, ap.32",
      faculty: "general medicine",
      course: 4,
      country: "Tunisia",
      birthday: "05-02-1991",
      group: "301ф",
      active: true,
      age() {
        return new Date().getFullYear() - +this.birthday.slice(-4);
      },
    },
    {
      id: 2223,
      img: "../images/ali.jpeg",
      name: "Ali",
      surname: "Bezouide",
      phone: "+79622342534",
      address: "Sovenstkaya 161, ap.3",
      faculty: "general medicine",
      course: 1,
      country: "Egypt",
      birthday: "03-02-1998",
      group: "101ф",
      active: true,
      age() {
        return new Date().getFullYear() - +this.birthday.slice(-4);
      },
    },
    {
      id: 2,
      img: "../images/mikhail.png",
      name: "Mikhail",
      surname: "Kovalski",
      phone: "+79655322534",
      address: "Sovenstkaya 181, ap.3",
      course: 3,
      country: "Russia",
      birthday: "03-02-1992",
      group: "202",
      active: false,
      age() {
        return new Date().getFullYear() - +this.birthday.slice(-4);
      },
    },
  ];

  //search algorithm
  const userInputValue = (data, type) => {
    if (type === "Name") {
      const filteredStudents = students.filter(
        (el) =>
          el.name.toLocaleLowerCase().includes(data) ||
          el.surname.toLocaleLowerCase().slice(0, data.length) === data
      );
      setFiltered(filteredStudents);
    }
    if (type === "Country") {
      const filteredStudents = students.filter((el) =>
        el.country.toLocaleLowerCase().includes(data)
      );
      setFiltered(filteredStudents);
    }
    if (type === "Year") {
      const filteredStudents = students.filter((el) =>
        el.course.toString().includes(data)
      );
      setFiltered(filteredStudents);
    }
    if (type === "Group") {
      const filteredStudents = students.filter((el) =>
        el.group.toLocaleLowerCase().includes(data)
      );
      setFiltered(filteredStudents);
    }
  };
  const searchMethodValue = (type) => {
    setSelectedType(type);
  };
  /////

  return (
    <div className={styles.App}>
      <Searchbar
        searchModeHandler={setSearchMode}
        value={userInputValue}
        type={selectedType}
      />
      {searchMode && (
        <div className={styles.wrapper}>
          <SearchCard
            text="Name search"
            color={"cadetblue"}
            searchMethod={searchMethodValue}
          />
          <SearchCard
            text="Group search"
            color={"rgb(113, 153, 212)"}
            searchMethod={searchMethodValue}
          />
          <SearchCard
            text="Year search"
            color={"rgb(113, 153, 212)"}
            searchMethod={searchMethodValue}
          />
          <SearchCard
            text="Country search"
            color={"rgb(113, 153, 212)"}
            searchMethod={searchMethodValue}
          />
        </div>
      )}
      {!searchMode && (
        <div>
          {filtered.length &&
            filtered.map((el) => <StudentCardSmall value={el} key={el.id} />)}
          {!filtered.length && <div>No students found</div>}
        </div>
      )}
    </div>
  );
}

export default App;
