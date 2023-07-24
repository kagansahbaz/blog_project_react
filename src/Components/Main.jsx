import React from "react";
import "../style/main.scss";

function Main({ blogs }) {
  return (
    <div className="main">
      {blogs.map((value) => (
        <div className="blog-card" key={value.id}>
          <h4>{value.blogTitle}</h4>
          <p>{value.blogContent}</p>
        </div>
      ))}
    </div>
  );
}

export default Main;