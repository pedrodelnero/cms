import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';

import { addBlog, updateBlog } from '../../actions/blogs';
import './styles.css';

const BlogForm = () => {
  const { id } = useParams();
  const blog = useSelector((state) => state.blogs.find((blog) => blog.blog_id === Number(id)));
  const [editorState, setEditorState] = useState(id ? EditorState.createWithContent(convertFromRaw(JSON.parse(blog.blog_body))) : EditorState.createEmpty());
  const [blogTitle, setBlogTitle] = useState(blog?.blog_title || '');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blogBody = JSON.stringify(convertToRaw(editorState.getCurrentContent()));

    if (id) {
      dispatch(updateBlog(id, { blogTitle, blogBody }));
    } else {
      dispatch(addBlog({ blogTitle, blogBody }));
    }
    window.location.href = '/';
  };

  const onEditorStateChange = (richTextEditorState) => setEditorState(richTextEditorState);

  return (
    <div className="richtext">
      <h1 variant="h6">{id ? 'Edit Blog' : 'Add Blog'}</h1>
      <form onSubmit={handleSubmit}>
        <h2>Title</h2>
        <input
          type="text"
          placeholder="Blog Title"
          value={blogTitle}
          onChange={(e) => setBlogTitle(e.target.value)}
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
        <Button variant="contained" color="primary" type="submit">{id ? 'Edit Blog' : 'Add Blog'}</Button>
      </form>
    </div>
  );
};

export default BlogForm;
