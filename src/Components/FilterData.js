import React, { useState } from "react";
import "./FilterData.css";
import { useDispatch } from "react-redux";
import { loadData, searchEmployee } from "../Redux/Actions";
import { usePostsContext } from "./PostsHandler";

import { useSelector } from "react-redux/es/hooks/useSelector";
import { useLocation, useParams } from "react-router-dom";

// function FilterData({ setFilteredDataPosts }) {
function FilterData() {
  const {
    data,
    setFilteredDataPosts,
    dataCopyPosts,
    setDataCopyPosts,
    setData,
  } = usePostsContext();

  console.log("================================================");
  console.log(typeof setFilteredDataPosts);
  console.log("does this render? filter");
  const currentvalue = useSelector((state) => state.employeeTask);
  console.log("[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]");
  const location = useLocation();

  console.log(location.pathname);

  let dispatch = useDispatch();

  const [filterdata, setemployeedata] = useState("atharv");

  let filterHandler = (e) => {
    console.log("does it come inside?");
    e.preventDefault();
    //////////////////////////////////////////////////////////////////////////////
    if (location.pathname === "/Posts") {
      console.log("working");

      if (filterdata.length >= 3) {
        let filteredDataPosts = [...data].filter((item) => {
          console.log("check after this");
          console.log(item.title.toLowerCase());
          filterdata.toLowerCase();

          return item.title.toLowerCase().includes(filterdata.toLowerCase());
        });
        console.log(filteredDataPosts);
        console.log("000000000000000007777777777777777777777777");

        setFilteredDataPosts(filteredDataPosts);
      } else {
        console.log(
          "yetay ka ikde iiiiiiiiiiiiiiiiiiiiiiiiiiiiii 0000000000000000000000 kkkkkkkkkkkkkkkkkkkkkkkkkkk aaaaaaaaaaaaaaaaaaaaaaaaa"
        );

        setFilteredDataPosts(dataCopyPosts);
      }
    }

    //////////////////////////////////////////////////
    else {
      if (filterdata.length >= 3) {
        let filteredData = [...currentvalue].filter((item) => {
          return item.employeename
            .toLowerCase()
            .includes(filterdata.toLowerCase());
        });
        console.log("hyachya khali");
        console.log(filteredData);
        dispatch(searchEmployee(filteredData));
      } else {
        dispatch(loadData(currentvalue));
      }
    }
  };
  return (
    <div className="searchBar">
      <input
        type="text"
        id="fname"
        name="fname"
        // value={filterdata.employeename}
        value={filterdata}
        onChange={(e) => setemployeedata(e.target.value)}
      ></input>

      <button type="submit" onClick={filterHandler}>
        SEARCH
      </button>
    </div>
  );
}

export default FilterData;
