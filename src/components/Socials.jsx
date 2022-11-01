import React from "react";
import github from "../assets/github.png";
import slack from "../assets/slack.png";

const Socials = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
        margin: "15px 0",
      }}
    >
      <img
        src={slack}
        alt="slack"
        style={{
          width: "40px",
          height: "40px",
          cursor: "pointer",
        }}
      />
      <img
        src={github}
        alt="github"
        style={{
          width: "40px",
          height: "40px",
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default Socials;
