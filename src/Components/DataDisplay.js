import { useSelector } from "react-redux/es/hooks/useSelector";
import "./DataDisplay.css";

function DataDisplay() {
  console.log("does this render? data display");
  const currentData = useSelector((state) => state.employeeTask);
  console.log("this is current value : ");

  return (
    <div>
      {currentData.length == 0 ? (
        <p> No Records</p>
      ) : (
        currentData.map((index) => {
          console.log(index);
          return (
            <div className="expense-item">
              <div>{index.employeename}</div>
              <div>{index.employeeaddress}</div>
              <div>{index.employeejoiningdate}</div>
              <div>{index.employeerole}</div>
              <div>{index.employeeage}</div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default DataDisplay;
