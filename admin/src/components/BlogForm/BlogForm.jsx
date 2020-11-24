import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField, Typography, InputAdornment } from '@material-ui/core/';

import { addBlog, updateBlog, getBlogById } from '../../actions/blogs';
import useStyles from './styles.js';
// ISSUES
// Cannot reload page due => will break as state from useSelector will clear

const BlogForm = () => {
  const classes = useStyles();
  const { id } = useParams();
  const blog = useSelector((state) => state.blogs.find((blog) => blog.blog_id === Number(id)));
  const [blogTitle, setBlogTitle] = useState(blog?.blog_title || '');
  const [editorState, setEditorState] = useState(id ? EditorState.createWithContent(convertFromRaw(JSON.parse(blog.blog_body))) : EditorState.createEmpty());
  const [blogAuthor, setBlogAuthor] = useState(blog?.blog_author || '');
  const [blogSlug, setBlogSlug] = useState(blog?.blog_slug || '');
  // const [savedSlug, setSavedSlug] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogById(id));
  }, [dispatch]);

  console.log('000', blogSlug);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blogBody = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
    // saveSlug();

    if (id) {
      dispatch(updateBlog(id, { blogTitle, blogBody, blogSlug }));
    } else {
      dispatch(addBlog({ blogTitle, blogBody, blogAuthor, blogSlug }));
    }
    // window.location.href = '/';
  };

  const onEditorStateChange = (richTextEditorState) => setEditorState(richTextEditorState);

  // const saveSlug = () => {
  //   setSavedSlug(blogSlug);
  // };

  return (
    <div className={classes.paper}>
      <Typography variant="h4">{id ? 'Edit Blog' : 'Add Blog'}</Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Typography variant="h5" className={classes.title}>Blog Title</Typography>
        <TextField
          className={classes.field}
          type="text"
          placeholder="Title"
          variant="outlined"
          value={blogTitle}
          onChange={(e) => {
            setBlogTitle(e.target.value); // abc
            setBlogSlug(`/${e.target.value.toLowerCase().trim().replace(/ /g, '-')}`);
          }}
        />
        <Typography variant="h5" className={classes.title}>Blog Body</Typography>
        <div className={classes.field}>
          <Editor
            placeholder="Write here..."
            editorState={editorState}
            wrapperClassName={classes.body}
            editorClassName={classes.bodyInput}
            toolbarClassName={classes.toolbar}
            onEditorStateChange={onEditorStateChange}
          />
        </div>
        <Typography variant="h5" className={classes.title}>Author</Typography>
        <TextField
          className={classes.field}
          type="text"
          placeholder="Author"
          variant="outlined"
          value={blogAuthor}
          onChange={(e) => setBlogAuthor(e.target.value)}
        />
        <Typography variant="h5" className={classes.title}>Slug</Typography>
        <TextField
          className={classes.slug}
          type="text"
          placeholder="Slug"
          variant="outlined"
          value={blogSlug}
          // onChange={setSlugonChange}
          onChange={(e) => setBlogSlug(e.target.value)}
          // InputProps={{
          //   classes: { input: classes.slugInput },
          //   endAdornment: (
          //     <InputAdornment position="end">
          //       <Button
          //         variant="contained"
          //         size="medium"
          //         onClick={saveSlug}
          //       >Save
          //       </Button>
          //     </InputAdornment>
          //   ) }}
        />
        <Button className={classes.button} variant="contained" color="primary" type="submit">{id ? 'Edit Blog' : 'Add Blog'}</Button>
      </form>
    </div>
  );
};

export default BlogForm;
