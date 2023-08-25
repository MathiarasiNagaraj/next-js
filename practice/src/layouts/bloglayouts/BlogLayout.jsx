import React from 'react'
import styles from './BlogLayout.module.scss'
const BlogLayout = ({children}) => {
  return (
      <div className={styles["blog-layout"]}>
          {children}
    </div>
  )
}

export default BlogLayout