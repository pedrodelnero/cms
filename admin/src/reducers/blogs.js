import { ADD_BLOG, GET_BLOGS, DELETE_BLOG, UPDATE_BLOG } from '../constants/actionTypes';

export default (blogs = [], action) => {
  switch (action.type) {
    case GET_BLOGS:
      return action.payload;
    case ADD_BLOG:
      return [action.payload, ...blogs];
    case DELETE_BLOG:
      return blogs.filter((blog) => blog.id !== action.payload);
    case UPDATE_BLOG:
      return [action.payload, ...blogs];
    default:
      return blogs;
  }
};
