import React, { useContext, useEffect, useState } from "react";

import "./Posts.css";

import { createContext } from "react";
import FilterData from "./FilterData";

const PostsContext = createContext();

export function usePostsContext() {
  return useContext(PostsContext);
}

export function PostsHandler({ children }) {
  console.log("inside posts");

  const empDataApi = "https://jsonplaceholder.typicode.com/posts";
  const [data, setData] = useState({});

  const [dataCopy, setDataCopy] = useState({});
  const [loading, setLoading] = useState(true);

  console.log("check if it renders ? posts");

  const [postdata, setpostdata] = useState({
    id: "",
    title: "",
    body: "",
  });

  ///////////////get data
  const fetchApiData = async (apiUrl) => {
    console.log("edit clicked dos this also get rendered");
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();

      setData(data);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(empDataApi);
  }, []);

  const setFilteredDataPosts = (filteredDataPostsGet) => {
    console.log(
      "ikde yetay?????????????????????????????????????__________)))))))))))"
    );
    console.log(filteredDataPostsGet);
    console.log(data);

    setData([...filteredDataPostsGet]);
  };

  const dataCopyPosts = data;

  ///////////////////////////////////////////////////
  function submitData() {
    if (postdata.id === "") {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: postdata.title,
          body: postdata.body,
          id: data.length,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((postdata) => setData([...data, postdata]));

      postdata.title = "";
      postdata.body = "";
    }

    //Below code to edit data
    else {
      let editedData = data;
      console.log("postdata.id");
      editedData[postdata.id - 1].title = postdata.title;

      editedData[postdata.id - 1].body = postdata.body;

      setData([...editedData]);
      postdata.title = "";
      postdata.body = "";
    }
  }

  const updateData = (id) => {
    console.log("id bagh 000000000000000000000000000000000000000");
    console.log(id);

    console.log("edit clicked");
    setpostdata({
      ...postdata,
      title: data[id - 1].title,
      body: data[id - 1].body,

      id: id,
    });

    console.log(postdata);
  };

  let deleteEmp = (id) => {
    console.log("delete here-!!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log(id);
    console.log(id);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        setData((values) => {
          return values.filter((item) => item.id !== id);
        });
      });
  };

  const contextValue = {
    data,
    setData,
    postdata,
    setpostdata,
    fetchApiData,
    submitData,
    updateData,
    deleteEmp,
    setFilteredDataPosts,
    dataCopyPosts,
  };

  return (
    <PostsContext.Provider value={contextValue}>
      {children}
      <FilterData setFilteredDataPosts={setFilteredDataPosts} />
    </PostsContext.Provider>
  );
}
