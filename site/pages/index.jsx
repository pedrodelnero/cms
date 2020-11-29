import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

import Layout from '../components/Layout';


const Index = () => {
  const [blogList, setBlogList] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/blogs').then(res => setBlogList(res.data)).catch(err => console.log(err))
  }, [])

  return(
    <Layout>
      <div>
        <h1>Blog List</h1>
        {blogList.map(blog => (
          <Link key={blog.blog_id} href={`/blog/${blog.blog_slug}`}><a><h2>{blog.blog_title}</h2></a></Link>
        ))}
      </div>
    </Layout>

  )
};


export default Index;