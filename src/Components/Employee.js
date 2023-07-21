import React, { useState } from "react";
import "./Employee.css";
import { Button } from "@mui/material";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { addEmployee } from "../Redux/Actions";
import { useDispatch } from "react-redux";

function Employee() {
  console.log("does this render? employee");
  const dispatch = useDispatch();

  const [newemployeedata, setemployeedata] = useState({
    employeename: "",
    employeeaddress: "",
    employeejoiningdate: "",
    employeeage: "",
    employeerole: "",
  });

  let submitNewEmployeeData = (e) => {
    e.preventDefault();
    dispatch(addEmployee(newemployeedata));
  };

  return (
    <div>
      <form onSubmit={submitNewEmployeeData} className="formStyle">
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Enter employee name</label>
            <input
              type="text"
              value={newemployeedata.employeename}
              onChange={(e) =>
                setemployeedata({
                  ...newemployeedata,
                  employeename: e.target.value,
                })
              }
              id="myName"
              required
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Enter employee address</label>
            <input
              type="text"
              value={newemployeedata.employeeaddress}
              onChange={(e) =>
                setemployeedata({
                  ...newemployeedata,
                  employeeaddress: e.target.value,
                })
              }
              required
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Enter employee joining date</label>
            <input
              type="date"
              value={newemployeedata.employeejoiningdate}
              onChange={(e) =>
                setemployeedata({
                  ...newemployeedata,
                  employeejoiningdate: e.target.value,
                })
              }
              required
            ></input>
          </div>

          <div className="new-expense__control">
            <label>Enter employee age</label>
            <input
              type="number"
              value={newemployeedata.employeeage}
              onChange={(e) =>
                setemployeedata({
                  ...newemployeedata,
                  employeeage: e.target.value,
                })
              }
              required
            ></input>
          </div>

          <div>
            <label>Enter employee role</label>
            <br></br>

            <Box sx={{ minWidth: "120px", height: "5 px" }}>
              <FormControl fullWidth sx={{ background: "#fff" }}>
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ fontSize: 12 }}
                ></InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={newemployeedata.employeerole}
                  onChange={(e) =>
                    setemployeedata({
                      ...newemployeedata,
                      employeerole: e.target.value,
                    })
                  }
                >
                  <MenuItem value={"FrontEndDeveloper"}>
                    Front End Developer
                  </MenuItem>
                  <MenuItem value={"BackendDeveloper"}>
                    Backend Developer
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="submitbutton">
          <Button variant="contained" type="submit">
            SUBMIT
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Employee;
