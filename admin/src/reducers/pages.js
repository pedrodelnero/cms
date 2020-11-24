import { ADD_PAGE, GET_PAGES, UPDATE_PAGE } from '../constants/actionTypes';

export default (pages = [], action) => {
  switch (action.type) {
    case GET_PAGES:
      return action.payload;
    case ADD_PAGE:
      return [action.payload, ...pages];
      // case DELETE_PAGE:
      //   return blogs.filter((blog) => blog.id !== action.payload);
    case UPDATE_PAGE:
      return [action.payload, ...pages];
    default:
      return pages;
  }
};
