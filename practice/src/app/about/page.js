import BlogCard from "@/components/blogCard/BlogCard";
import BlogLayout from "@/layouts/bloglayouts/BlogLayout";
import React from "react";
import blogdata from "../../data/blogdata.json";

export default function About() {
  const blogs = blogdata.map((blog) => <BlogCard data={blog} key={blog.id} />);
  return (
    <div>
      <h1>ABOUT PAGE</h1>

      <BlogLayout>{blogs}</BlogLayout>
    </div>
  );
}
