import BlogCard from '@/components/blogCard/BlogCard'
import BlogLayout from '@/layouts/bloglayouts/BlogLayout'
import blogdata from './../data/blogdata.json'
import './globals.css'
export default function Home() {
  const blogs = blogdata.map((blog) => <BlogCard data={blog} key={ blog.id} />)
  return (
  
    <div>
      <h1>HOME PAGE</h1>

        <BlogLayout>{ blogs}</BlogLayout>

</div>
  )
}
