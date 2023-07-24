import React from "react";
import Aside from "./Aside";
import Main from "./Main";
import "../style/mainContainer.scss";

function MainContainer({ blogs, categories }) {
  return (
    <div className="main-container">
      <Aside categories={categories} />
      <Main blogs={blogs} />
    </div>
  );
}

export default MainContainer;
