import React from "react";
import avatar from "../assets/avatar.png";
import share from "../assets/share.png";
import more from "../assets/more.png";

const Profile = () => {
  return (
    <div
      className="flex-col m8"
      style={{ position: "relative", maxWidth: "65%" }}
    >
      <img
        src={avatar}
        alt="avatar"
        id="profile__img"
        style={{ marginBottom: "20px" }}
      />
      <img
        src={share}
        alt="share"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          cursor: "pointer",
        }}
        className="share"
      />
      <img
        src={more}
        alt="share"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          cursor: "pointer",
          marginRight: "-40px",
        }}
        className="more"
      />
      <h1>Annette Black</h1>
      <p id="slack" style={{ display: "none" }}>
        Jonathan Akhagbosu
      </p>
    </div>
  );
};

export default Profile;
