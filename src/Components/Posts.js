import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import TextField from "@mui/material/TextField";
import React, { useContext, useEffect, useState } from "react";

import "./Posts.css";
import { FormControl } from "@mui/material";

import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PostsHandler, { PostsContext, usePostsContext } from "./PostsHandler";

function Posts() {
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

  return (
    <div>
      <div className="submitDataStyle">
        <FormControl
          sx={{ minWidth: 275, backgroundColor: "#f0f0f0", height: "250px" }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14, marginBottom: "26px" }}
              color="text.secondary"
              gutterBottom
            >
              <textarea
                id="outlined-basic"
                label="Title"
                variant="outlined"
                value={postdata.title}
                onChange={(e) =>
                  setpostdata({
                    ...postdata,
                    title: e.target.value,
                  })
                }
              />
            </Typography>
            <Typography variant="h5" component="div">
              <textarea
                id="outlined-basic1"
                label="Body"
                variant="outlined"
                value={postdata.body}
                onChange={(e) =>
                  setpostdata({
                    ...postdata,
                    body: e.target.value,
                  })
                }
              />
            </Typography>
          </CardContent>

          <CardActions>
            <div className="buttonStyle">
              {postdata.id === "" ? (
                <Button
                  variant="contained"
                  onClick={submitData}
                  id="submitData"
                >
                  SUBMIT
                </Button>
              ) : (
                // If postdata.id is not an empty string
                <Button
                  variant="contained"
                  onClick={submitData}
                  id="submitData"
                >
                  Update
                </Button>
              )}
            </div>
          </CardActions>
        </FormControl>
      </div>

      {data.length > 0 ? (
        data.map((post) => (
          <Card
            sx={{ minWidth: 275, backgroundColor: "#d6caa7 " }}
            className="cardStyle"
          >
            <CardContent>
              <Typography
                sx={{
                  fontSize: 14,
                  border: "1px solid black",
                  width: "20px",
                  borderRadius: "80%",
                  padding: "1px",
                  textAlign: "center",
                }}
                color="text.secondary"
                gutterBottom
              >
                {post.id}
              </Typography>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  mb: 1.5,
                  width: "900px",

                  padding: "8px",
                }}
              >
                {post.title}
              </Typography>

              <Typography
                sx={{
                  mb: 1.5,
                  width: "900px",

                  padding: "8px",
                }}
                color="text.secondary"
              >
                {post.body}
              </Typography>
            </CardContent>
            <CardActions>
              <div className="iconButtonStyle">
                <IconButton size="small" onClick={() => deleteEmp(post.id)}>
                  <DeleteIcon />
                </IconButton>
                <IconButton size="small" onClick={() => updateData(post.id)}>
                  <EditIcon />
                </IconButton>
              </div>
            </CardActions>
          </Card>
        ))
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default Posts;
