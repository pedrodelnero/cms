import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Paper, TextField, Typography } from '@material-ui/core/';

import { addPage, getPageById, updatePage } from '../../actions/pages';
import useStyles from './styles.js';

const Createpage = () => {
  const classes = useStyles();
  const { id } = useParams();
  const page = useSelector((state) => state.pages.find((page) => page.page_id === Number(id)));
  const [pageTitle, setPageTitle] = useState(page?.page_title || '');
  const [editorState, setEditorState] = useState(id ? EditorState.createWithContent(convertFromRaw(JSON.parse(page.page_body))) : EditorState.createEmpty());
  const [pageSlug, setPageSlug] = useState(page?.page_slug || '');
  const [metaKeywords, setMetaKeywords] = useState(page?.page_metadata_keywords || '');
  const [metaDescription, setMetaDescription] = useState(page?.page_metadata_description || '');
  const [searchKeywords, setSearchKeywords] = useState(page?.page_search_keywords || '');
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) dispatch(getPageById(id));
  }, [id, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const pageBody = JSON.stringify(convertToRaw(editorState.getCurrentContent()));

    if (id) {
      dispatch(updatePage(id, { pageTitle, pageBody, pageSlug, metaKeywords, metaDescription, searchKeywords }));
    } else {
      dispatch(addPage({ pageTitle, pageBody, pageSlug, metaKeywords, metaDescription, searchKeywords }));
    }
    // window.location.href = '/';
  };

  const onEditorStateChange = (richTextEditorState) => setEditorState(richTextEditorState);

  return (
    <>
      <Typography variant="h3" align="center" style={{ marginBottom: 20 }}>{id ? 'Edit Page' : 'Add Page'}</Typography>
      <form onSubmit={handleSubmit}>
        <Paper className={classes.root}>
          <Typography variant="h4" className={classes.subTitle}>Page Details</Typography>
          <div className={classes.formInput}>
            <Typography variant="subtitle1" className={classes.inputTitle}>Page Title</Typography>
            <TextField
              className={classes.field}
              type="text"
              placeholder="Title"
              variant="outlined"
              value={pageTitle}
              onChange={(e) => {
                setPageTitle(e.target.value); // abc
                setPageSlug(`/${e.target.value.toLowerCase().trim().replace(/ /g, '-')}`);
              }}
            />
          </div>
          <div className={classes.formInput}>
            <Typography variant="subtitle1" className={classes.inputTitle}>Page URL</Typography>
            <TextField
              className={classes.field}
              type="text"
              placeholder="URL"
              variant="outlined"
              value={pageSlug}
              onChange={(e) => setPageSlug(e.target.value)}
            />
          </div>
          <div className={classes.formInput}>
            <Typography variant="subtitle1" className={classes.pageBodyTitle}>Page Body</Typography>
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
          </div>

        </Paper>
        <Paper className={classes.root}>
          <Typography variant="h4" className={classes.subTitle}>Advanced Options</Typography>
          <div className={classes.formInput}>
            <Typography variant="subtitle1" className={classes.inputTitle}>Meta Keyword</Typography>
            <TextField
              className={classes.field}
              type="text"
              placeholder="Optional"
              variant="outlined"
              value={metaKeywords}
              onChange={(e) => setMetaKeywords(e.target.value)}
            />
          </div>
          <div className={classes.formInput}>
            <Typography variant="subtitle1" className={classes.inputTitle}>Meta Description</Typography>
            <TextField
              className={classes.field}
              type="text"
              placeholder="Optional"
              variant="outlined"
              value={metaDescription}
              onChange={(e) => setMetaDescription(e.target.value)}
            />
          </div>
          <div className={classes.formInput}>
            <Typography variant="subtitle1" className={classes.inputTitle}>Search Keyword</Typography>
            <TextField
              className={classes.field}
              type="text"
              placeholder="Optional"
              variant="outlined"
              value={searchKeywords}
              onChange={(e) => setSearchKeywords(e.target.value)}
            />
          </div>

        </Paper>
        <Button className={classes.button} variant="contained" color="primary" type="submit">{id ? 'Edit Page' : 'Add Page'}</Button>
      </form>

    </>
  );
};

export default Createpage;
