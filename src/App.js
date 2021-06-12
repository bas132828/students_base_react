import "./App.css";
import Searchbar from "./Components/Searchbar";
import SearchCard from "./Components/SearchCard";
import StudentCardSmall from "./Components/cards/StudentCardSmall";

function App() {
  const students = [
    {
      id: 0,
      name: "Hammach",
      surname: "Yassine",
      phone: "+79622373468",
      address: "Sovenstkaya 31, ap.32",
      faculty: "general medicine",
      course: 4,
      birthday: "05-02-1991",
      age() {
        return new Date().getFullYear() - +this.birthday.slice(-4);
      },
    },
    {
      id: 1,
      name: "Ali",
      surname: "Bezouide",
      phone: "+79622342534",
      address: "Sovenstkaya 161, ap.3",
      faculty: "general medicine",
      course: 1,
      birthday: "03-02-1998",
      age() {
        return new Date().getFullYear() - +this.birthday.slice(-4);
      },
    },
    {
      id: 2,
      name: "Mikhail",
      surname: "Kovalski",
      phone: "+79655322534",
      address: "Sovenstkaya 181, ap.3",
      course: 3,
      birthday: "03-02-1992",
      age() {
        return new Date().getFullYear() - +this.birthday.slice(-4);
      },
    },
  ];
  return (
    <div className="App">
      <Searchbar />
      <div className="wrapper">
        <SearchCard text="Name search" />

        <SearchCard text="Group search" />

        <SearchCard text="Year search" />

        <SearchCard text="Country search" />
      </div>
      <StudentCardSmall value={students} />
    </div>
  );
}

export default App;
