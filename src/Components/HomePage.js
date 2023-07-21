import DataDisplay from "./DataDisplay";

import Employee from "./Employee";
import { usePostsContext } from "./PostsHandler";
import "./HomePage.css";

function HomePage() {
  //checking if i can get data here from posts
  const {
    data,
    setData,
    postdata,
    setpostdata,
    fetchApiData,
    submitData,
    updateData,
    deleteEmp,
  } = usePostsContext();
  console.log("does this render? home iiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
  console.log(data);

  return (
    <div>
      <h4 className="header">
        <h2>Employee Information</h2>
      </h4>
      <div></div>
      <div className="headinglabels">
        <h4>NAME</h4>
        <h4>ADDRESS</h4>
        <h4>JOINING DATE</h4>
        <h4>ROLE</h4>
        <h4>AGE</h4>
      </div>

      <DataDisplay />

      <br></br>
      <br></br>
      <div className="title">
        <h3>NEW EMPLOYEE INFORMATION</h3>
      </div>
      <br></br>
      <br></br>
      <Employee />
    </div>
  );
}

export default HomePage;
