import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw } from 'draft-js';
// import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { addBlog, updateBlog, getBlogById } from '../../actions/blogs';
import "./styles.css";

const BlogForm = () => {
    const { id } = useParams();
    const blog = useSelector((state) => {
      state.blogs.find((blog) => blog.blog_id === id);
    })
    // tackle this
    const [editorState, setEditorState] = useState(blog?.blog_body || EditorState.createEmpty());
    const [blogTitle, setBlogTitle] = useState(blog?.blog_title || '');
    const dispatch = useDispatch();
    
    // useEffect(() => {
    //   dispatch(getBlogById(id));
    //   console.log('88', blog)
    // }, [id, dispatch]);

  
    const handleSubmit = (e) => {
      e.preventDefault();
      const blogBody = JSON.stringify(convertToRaw(editorState.getCurrentContent()));

      (id) ? dispatch(updateBlog(id, { blogTitle, blogBody })) : dispatch(addBlog({ blogTitle, blogBody }))

      window.location.href = '/'
    }

    // useEffect(() => {
    //     axios
    //         .get('http://localhost:5000/blogs')
    //         .then((res) => setBlogList(res.data))

    // }, [])

    // const submitBlog = () => {
    //     const blogBody = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
    //     axios.post('http://localhost:5000/blog', { blogTitle, blogBody }).then((res) => console.log(res))
    //     window.location.reload(); 
    // }

    // const deleteText = (id) => {
    //     axios.delete(`http://localhost:5000/delete-text/${id}`)
    //     window.location.reload(); 
    // }




    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
    };

    return (
        <div className="richtext">
          <h1 variant="h6">{id ? "Edit Blog" : "Add Blog"}</h1>
            <form onSubmit={handleSubmit}>
                <h2>Title</h2>
                <input
                    type="text"
                    placeholder="Blog Title"
                    value={blogTitle}
                    onChange={e => setBlogTitle(e.target.value)}
                />
                <div className="richtextinput">
                    <Editor
                        editorState={editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onEditorStateChange={onEditorStateChange}
                    />
                </div>
                <button type="submit">{id ? "Edit Blog" : "Add Blog"}</button>
            </form>
        </div>
    )
}

export default BlogForm;
