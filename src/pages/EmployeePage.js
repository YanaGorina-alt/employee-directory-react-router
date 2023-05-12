//import Header from './Header';
import { Link } from "react-router-dom";

export default function EmployeePage({ employee }) {
  const loaded = () => {
    return (
      <div
        className="employee-page"
        style={{ backgroundColor: employee.color }}
      >
        {/* <Header text="Employee" /> */}
        <Link to ="/">EMPLOYEE DIRECTORY</Link>
        <h1>Employee </h1><br/>
        <img src={employee.photo} alt={employee.name} className="profile-img" />
        <div className="profile-details">
          <h2 className="profile-name">{employee.name}</h2>
          <p className="profile-position">{employee.position}</p>
          <div className="contact-info">
            <p>Office Phone: {employee.workPhone}</p>
            <p>Mobile Phone: {employee.cellPhone}</p>
            <p>Email: {employee.email}</p>
          </div>
        </div>
      </div>
    );
  };

  const loading = () => {
    return (
      <div className="employee-page">
        <h1>Employee Page</h1>
        <h2>No Employee Selected</h2>
      </div>
    );
  };

  return employee ? loaded() : loading();
}
