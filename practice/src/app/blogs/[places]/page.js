import { Blogtag } from "@/components/blogtags/Blogtag";
import Image from "next/image";
import React from "react";
import blogdata from "../../../data/blogdata.json";
import './../../globals.css'
import styles from './blog.module.scss'
const BlogPage = ({ params }) => {
  const place = blogdata.filter((obj) => obj.id == params.places);
  const { details, title, image, tags } = place[0];
  const tag = tags.map((tagItem) => <Blogtag name={ tagItem} key={tagItem} />)

  return (
    <div className={styles["blog-page"]}>
      <Image src={`/assets/images/${image}`} width={1100} height={600}  />
    <div className={styles["blog-tag"]}>
        {tag}
        </div>
      <h1>{title}</h1>
      <p>{details}</p>

    </div>
  );
};

export default BlogPage;
