import React from "react";
import Footer from "./components/Footer";
import Links from "./components/Links";
import Profile from "./components/Profile";

const data = [
  {
    id: "twitter",
    link: "https://twitter.com/joeakhagbosu/",
    title: "@JoeAkhagbosu",
  },
  { id: "btn__zuri", link: "https://training.zuri.team/", title: "Zuri Team" },
  { id: "books", link: "http://books.zuri.team/", title: "Zuri Books" },
  {
    id: "book__python",
    link: "https://books.zuri.team/",
    title: "Python Books",
  },
  {
    id: "pitch",
    link: "https://background.zuri.team/",
    title: "Background Check for Coders",
  },
  {
    id: "book__design",
    link: "https://books.zuri.team/design-rules",
    title: "Design Books",
  },
];

const App = () => {
  return (
    <div className="container">
      <Profile />
      {data.map((e, index) => {
        return <Links key={index} id={e.id} link={e.link} title={e.title} />;
      })}
      <Footer />
    </div>
  );
};

export default App;
