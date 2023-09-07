import React from "react";
import Navbar from "../components/Navbar";
import Blog from "./Blog";
import About from "./About";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { getPosts } from "../store/actions/posts";

const Home = () => {
  const dispatch = useDispatch()

  dispatch(getPosts("1"))
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
