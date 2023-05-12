import { Link } from "react-router-dom";
//import { useParams } from "react-router-dom";
// import data from "../data"

export default function EmployeeListItem(props) {
    // const params = useParams();
    // const paramId = params.id;
    // const employee = data.find((person)=>{
    //   return person.id = paramId;
    // })
    return (
      <div
        className="list-item"
        onClick={() => {
          props.handleClick(props.person.id);
        }}
      >
        <Link to ="/">EMPLOYEE DIRECTORY</Link>
        <img className="pic" src={props.person.photo} alt={props.person.name}/>
        <div className="">
          <h3>{props.person.name}</h3>
          <h6>{props.person.position}</h6>
        </div>
      </div>
    );
  }