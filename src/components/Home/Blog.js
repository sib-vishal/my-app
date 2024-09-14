"use client"
import React, { useEffect, useState } from "react";
// import * as CONSTANTS from "../../constants/constants";
import axios from "axios";
import BlogCard from "../BlogCard";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const headers = {
    "Content-Type": "multipart/form-data",
    Authorization: CONSTANTS.API_TOKEN,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${CONSTANTS.API_URL}blog/all?publish=1&limit=6`,
          { headers: headers }
        );
        setBlogs(res?.data?.blogs);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  console.log(blogs);

  return (
    <section>
      <div className="containerFull">
        <h4 className="heading text-center mb-3 fontWeight700">
          From Our Blogs
        </h4>
        <div className="row mt-lg-3">
          {blogs.map((blog, index) => {
            return (
              <div key={blog.id} className="col-lg-4">
                <BlogCard blog={blog} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
