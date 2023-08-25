import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Blogtag } from '../blogtags/Blogtag'
import styles from './BlogCard.module.scss'
const BlogCard = props => {
  const{image,title,details,tags,id}=props.data
  const tag = tags.map((tagItem) => <Blogtag name={ tagItem} key={tagItem} />)
  return (
    <div className={styles["blog-card"]}>
      <Link href={`/blogs/${id}`}>
    
      <Image
        src={`/assets/images/${image}`}
        alt={title}
        width={400}
        height={400}
      />
     
      </Link>
      <h1>{title}</h1>
      <p>{details}</p>
      <div className={styles["blog-tags"]}>
        {tag}
      </div>
    </div>
  )
}

export default BlogCard