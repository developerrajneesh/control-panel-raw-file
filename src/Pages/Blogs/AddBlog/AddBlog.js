import React from "react";
import "./addblog.css";
import { TextField } from "@mui/material";
import Header from "../../../Components/Header/Header";
import Editor from "../../../Components/Editor/Editor";

function AddBlog() {
  return (
    <div>
      <Header />
      <div className="mt-5">
      <div className="my-3">
        <TextField
          sx={{ width: "100%" }}
          id="outlined-password-input"
          label="Title"
          type="text"
          autoComplete="current-password"
        />
      </div>
     
        <TextField
          sx={{ width: "100%" }}
          id="outlined-password-input"
          label="Tags"
          type="text"
          autoComplete="current-password"
        />
       
        <TextField
          sx={{ width: "100%" }}
          id="outlined-password-input"
          label="Author"
          className="my-3"
          type="text"
          autoComplete="current-password"
        />
      </div>
      <Editor />
    </div>
  );
}

export default AddBlog;
