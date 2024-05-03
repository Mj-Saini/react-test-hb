import React from "react";
import Reviews from "../components/Reviews";
import JoinUs from "../components/common/JoinUs";
import Featured from "../components/Featured";
import Author from "./../components/Author";
import Category from "../components/Category";
import WeStarted from "../components/WeStarted";
import Contents from "../components/Contents";
import FeaturedPost from "../components/FeaturedPost";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedPost />
      <Contents spacing="py-md-5 pb-5 pt-4 " />
      <Category heading="Choose A Catagory" styling="text-center" />
      <WeStarted />
      <Author />
      <Featured />
      <Reviews />
      <JoinUs />
    </>
  );
};

export default Home;
