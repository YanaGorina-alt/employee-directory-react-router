import './App.css';
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EmployeePage from "./pages/EmployeePage";
import data from "./data"
import { useState } from 'react';
// import EmployeeListItem from './pages/EmployeeListItem';


function App() {

  const [employees, setEmployees] = useState(data);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  
  return (
    <div className="App">
       <div className="container">
        <Routes>
          <Route path = "/" element= {<HomePage
              employees={employees}
              setSelectedEmployee={setSelectedEmployee}
              setEmployees={setEmployees}
            />} />
          <Route path='/employee/:id' element= {<EmployeePage employee={selectedEmployee} />} />
          {/* <Route path='/emplpyee:id' element={<EmployeeListItem />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
