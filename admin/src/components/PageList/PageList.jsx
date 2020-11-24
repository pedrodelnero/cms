import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPages } from '../../actions/pages';
import PageListItem from './PageListItem/PageListItem';

const PageList = () => {
  const pages = useSelector((state) => state.pages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPages());
  }, [dispatch]);

  return (
    <div className="blog-list">
      {pages.map((page) => (
        <PageListItem key={page.page_id} page={page} />

      ))}
    </div>
  );
};

export default PageList;
