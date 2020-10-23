import React, { useState, useEffect } from 'react'
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw } from 'draft-js';
import axios from 'axios';
import draftToHtml from "draftjs-to-html";

import "./AddBlog.css";

const AddBlog = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [blogTitle, setBlogTitle] = useState('');
    // const [blogBody, setBlogBody] = useState('');
    const [blogList, setBlogList] = useState([]);

    // useEffect(() => {
    //     axios
    //         .get('http://localhost:5000/get-blogs')
    //         .then((res) => setBlogList(res.data))

    // }, [])

    const submitBlog = () => {
        const blogBody = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
        axios.post('http://localhost:5000/post-blog', { blogTitle, blogBody }).then((res) => console.log(res))
        // window.location.reload(); 
    }

    // const deleteText = (id) => {
    //     axios.delete(`http://localhost:5000/delete-text/${id}`)
    //     window.location.reload(); 
    // }




    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
    };


    // console.log(convertToRaw(editorState.getCurrentContent()))
    return (
        <div className="richtext">
            <form onSubmit={submitBlog}>
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
                <button type="submit">Submit</button>
            </form>
            {/* {blogList.map((blog) => (
                <div key={blog.blog_id}>
                    <div dangerouslySetInnerHTML={{__html: draftToHtml(JSON.parse(blog.blog_title))}} />
                    <div dangerouslySetInnerHTML={{__html: draftToHtml(JSON.parse(blog.blog_body))}} />
                    <button onClick={() => deleteText(text.text_id)}>Delete</button>
                </div>
            ))} */}
        </div>
    )
}

export default AddBlog;
