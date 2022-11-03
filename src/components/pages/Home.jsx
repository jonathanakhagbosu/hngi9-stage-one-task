import React from "react";
import Footer from "../Footer";
import Links from "../Links";
import Profile from "../Profile";
import Socials from "../Socials";

const Home = () => {
  return (
    <div className="container">
      <Profile />
      <Links />
      <Socials />
      <Footer />
    </div>
  );
};

export default Home;
