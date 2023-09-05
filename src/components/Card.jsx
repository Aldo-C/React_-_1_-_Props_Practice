import React from "react";

// Notice that classes are added here in the .jsx functions and not in the index.js file
function Card(props) {
  // Use {} to enclose javascript calls to the props passed through functions calls to this component through the parent .jsx (in this case App.jsx)
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.img} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
