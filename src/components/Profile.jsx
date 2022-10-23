import React from "react";
import avatar from "../assets/avatar.png";

const Profile = () => {
  return (
    <div className="flex-col m8">
      <img src={avatar} alt="avatar" id="profile__img" />
      <h1>Jonathan Akhagbosu</h1>
      <p id="slack" style={{ display: "none" }}>
        Jonathan
      </p>
    </div>
  );
};

export default Profile;
