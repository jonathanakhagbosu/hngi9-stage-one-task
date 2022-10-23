import React from "react";

const Links = (props) => {
  return (
    <div className="flex-col">
      <a href={props.link} id={props.id}>
        {props.title}
      </a>
    </div>
  );
};

export default Links;
