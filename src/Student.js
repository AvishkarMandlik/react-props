import "./Student.css";

function Students(props) {
    return (
      <>
      <div className="Stud-container">
      <h2>Hello, I am {props.StudName}</h2>
      <h3>my roll no is {props.RollNo}</h3>
      </div>
      </>
    );
  }
  export default Students;
  