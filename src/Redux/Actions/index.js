export const addEmployee = (empData) => {
  return {
    type: "ADDEMPLOYEE",
    payload: empData,
  };
};

export const searchEmployee = (empName) => {
  return {
    type: "SEARCHEMPLOYEE",
    payload: empName,
  };
};
//remove
export const loadData = (currentvalue) => {
  return {
    type: "LOADDATA",
    payload: currentvalue,
  };
};
