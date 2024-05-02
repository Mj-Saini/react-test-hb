import React from "react";
import Reviews from "../components/Reviews";
import JoinUs from "../components/common/JoinUs";
import BlogHero from "../components/BlogHero";
import BlogAllPost from "../components/BlogAllPost";
import Category from "../components/Category";

const Blog = () => {
  return (
    <>
      <BlogHero />
      <BlogAllPost />
      <Category heading="All Categories" styling="text-start" />
      <Reviews />
      <JoinUs />
    </>
  );
};

export default Blog;
