import React from "react";
import "./loading.css";

const Loading = (props) => {
  return (
    <div className={props.isLoading ? "loading active-loading" : "loading"}>
      <div
        className={props.isLoading ? "first-load active-load" : "first-load"}
      ></div>
      <div
        className={props.isLoading ? "second-load active-load" : "second-load"}
      ></div>
      <div
        className={props.isLoading ? "third-load active-load" : "third-load"}
      ></div>
      <div
        className={props.isLoading ? "fourth-load active-load" : "fourth-load"}
      ></div>
      <div className="main-load">
        <h1>HL</h1>
      </div>
    </div>
  );
};

export default Loading;
