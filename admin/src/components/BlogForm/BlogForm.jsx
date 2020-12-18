import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Paper, TextField, Typography } from '@material-ui/core/';

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
    if (id) dispatch(getBlogById(id));
  }, [id, dispatch]);

  const publishBlog = () => {
    const blogBody = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
    // saveSlug();

    if (id) {
      dispatch(updateBlog(id, { blogTitle, blogBody, blogSlug, isPublished: 1 }));
    } else {
      dispatch(addBlog({ blogTitle, blogBody, blogAuthor, blogSlug, isPublished: true }));
    }
    window.location.href = '/blogs';
  };
  const saveDraft = () => {
    const blogBody = JSON.stringify(convertToRaw(editorState.getCurrentContent()));

    if (id) {
      dispatch(updateBlog(id, { blogTitle, blogBody, blogSlug, isPublished: false }));
    } else {
      dispatch(addBlog({ blogTitle, blogBody, blogAuthor, blogSlug, isPublished: false }));
    }
  };

  const onEditorStateChange = (richTextEditorState) => setEditorState(richTextEditorState);

  return (
    <>
      <Typography variant="h3" style={{ marginBottom: 20 }}>{id ? 'Edit Blog' : 'Add Blog'}</Typography>
      <form>
        {/* <form onSubmit={handleSubmit}> */}
        <Paper className={classes.root}>
          <Typography variant="h5" className={classes.subTitle}>Blog Title</Typography>
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
          <Typography variant="h5" className={classes.subTitle}>Blog Body</Typography>
          <div className={classes.field}>
            <Editor
              placeholder="Write here..."
              editorState={editorState}
              wrapperClassName={classes.bodyWrapper}
              editorClassName={classes.bodyInput}
              toolbarClassName={classes.bodyToolbar}
              onEditorStateChange={onEditorStateChange}
            />
          </div>
          <Typography variant="h5" className={classes.subTitle}>Author</Typography>
          <TextField
            className={classes.field}
            type="text"
            placeholder="Author"
            variant="outlined"
            value={blogAuthor}
            onChange={(e) => setBlogAuthor(e.target.value)}
          />
          <Typography variant="h5" className={classes.subTitle}>Slug</Typography>
          <TextField
            className={classes.slug}
            type="text"
            placeholder="Slug"
            variant="outlined"
            value={blogSlug}
          // onChange={setSlugonChange}
            onChange={(e) => setBlogSlug(e.target.value)}
          />
        </Paper>
        <Button className={classes.button} variant="contained" color="primary" onClick={publishBlog}>{id ? 'Update' : 'Publish'}</Button>
        <Button className={classes.button} variant="contained" type="submit" onClick={saveDraft}>Save Draft</Button>
        {/* <Button className={classes.button} variant="contained" color="primary" type="submit">{id ? 'Update' : 'Publish'}</Button>
        <Button className={classes.button} variant="contained" type="submit">Save Draft</Button> */}
      </form>
    </>
  );
};

export default BlogForm;
