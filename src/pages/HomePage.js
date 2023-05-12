import React from "react";
import { Link } from "react-router-dom";
import EmployeeList from "./EmployeeList";
import Header from "./Header";
import SearchBar from "./SearchBar";

export default function HomePage(props) {
  const title = "Employee Directory";
  return (
    <div
      style={{
        // display: "flex",
        // flexDirection: "column",
        // border: "solid 2px orange",
        rowGap: "1px",
        padding: "2px",
        margin: "1px",
        width: "90%",
        textAlign: "center"
      }}
    > <h1>Employee Directory</h1><br/>
      {/* <Header title={title} /> */}
      <SearchBar setEmployees={props.setEmployees} employees={props.employees} />
      <EmployeeList 
        employees={props.employees}
        setSelectedEmployee={props.setSelectedEmployee}
      />
      <Link to="/employee">Go to Employee Page</Link>
    </div>
  );
}
