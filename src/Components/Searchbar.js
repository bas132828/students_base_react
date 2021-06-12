import React from "react";
import "./Searchbar.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const Searchbar = (props) => {
  return (
    <InputGroup className="mb-3 searchbar-field">
      <FormControl
        placeholder="Student's name"
        aria-label="Student's name"
        aria-describedby="basic-addon2"
      />
      <Button variant="outline-secondary" id="button-addon2">
        Search
      </Button>
    </InputGroup>
  );
};

export default Searchbar;
