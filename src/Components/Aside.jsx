import React from "react";
import "../style/aside.scss";

function Aside({categories}) {
  return (
    <div className="aside">
      <h3>Categories</h3>
      <ul>
        {categories.map((value) => (
          <li key={value.id}>{value.categoryName}</li>
        ))}
      </ul>
    </div>
  );
}

export default Aside;
