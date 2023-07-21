let initialData = [
  {
    employeename: "Atharv",
    employeeaddress: "abc society pune",
    employeejoiningdate: "2023-09-12",
    employeerole: "Software engineer",
    employeeage: 22,
  },
  {
    employeename: "Utkarsh",
    employeeaddress: "xyz society pune",
    employeejoiningdate: "2023-09-4",
    employeerole: "Software Developer",
    employeeage: 22,
  },

  {
    employeename: "abcd",
    employeeaddress: "xyz ",
    employeejoiningdate: "2023-09-4",
    employeerole: "Tester",
    employeeage: 22,
  },
];

let initialDataCopy = [
  {
    employeename: "Atharv",
    employeeaddress: "abc society pune",
    employeejoiningdate: "2023-09-12",
    employeerole: "Software engineer",
    employeeage: 22,
  },
  {
    employeename: "Utkarsh",
    employeeaddress: "xyz society pune",
    employeejoiningdate: "2023-09-4",
    employeerole: "Software Developer",
    employeeage: 22,
  },

  {
    employeename: "abcd",
    employeeaddress: "xyz ",
    employeejoiningdate: "2023-09-4",
    employeerole: "Tester",
    employeeage: 22,
  },
];

const employeeTask = (state = initialData, action) => {
  switch (action.type) {
    case "ADDEMPLOYEE":
      const empData = action.payload;
      initialDataCopy.push(empData);
      return [...state, empData];

    case "SEARCHEMPLOYEE":
      const empName = action.payload;

      return [...empName];

    case "LOADDATA":
      return [...initialDataCopy];

    default:
      return state;
  }
};

export default employeeTask;
