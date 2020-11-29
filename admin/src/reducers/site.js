import { ADD_SITE, GET_SITE, UPDATE_SITE_INFO } from '../constants/actionTypes';

export default (site = {}, action) => {
  switch (action.type) {
    case ADD_SITE:
      return action.payload;
    case GET_SITE:
      return action.payload;
    case UPDATE_SITE_INFO:
      return action.payload;
    default:
      return site;
  }
};
