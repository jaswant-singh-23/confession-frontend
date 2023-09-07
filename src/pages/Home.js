import React from "react";
import Navbar from "../components/Navbar";
import Blog from "./Blog";
import About from "./About";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
