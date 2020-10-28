import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import draftToHtml from "draftjs-to-html";

import Layout from '../../components/Layout';


const BlogPost = () => {
    const router = useRouter()
    const [ blogPost, setBlogPost ] = useState(null);
    const { blog } = router.query; // think-again => ''
    console.log(222, blog)

    const loadBlogPost = async () => {
        if(blog) {
            const { data } = await axios.get(`http://localhost:5000/blog/${blog}`)

            setBlogPost(data)
        }
    }

    useEffect(() => {
        loadBlogPost();
        // console.log(blogPost.blog_body)
      }, [blog])

      if(!blogPost){
        return 'loading...'
      }
  
    return (
        <Layout>
            <h1>Post Title: {blogPost.blog_title}</h1>
            <h3>Post Body:</h3>
            <div dangerouslySetInnerHTML={{__html: draftToHtml(JSON.parse(blogPost.blog_body))}}></div>
        </Layout>
    )
}
  
export default BlogPost