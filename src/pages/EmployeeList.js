import EmployeeListItem from './EmployeeListItem';
import { Link } from 'react-router-dom';

export default function EmployeeList({ employees, setSelectedEmployee }) {
  const handleClick = (id) => {
    setSelectedEmployee(employees.find((employee) => employee.id === id));
  };

  return (
    <div className="employee-list">
      {employees.length &&
        employees.map((employee, i) => {
          return (
            <Link to={`/employee/${employee.id}`}>
              <EmployeeListItem
                key={i}
                person = {employee}
                handleClick={handleClick}
              />
            </Link>
          );
        })}
    </div>
  );
}