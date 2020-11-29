import { GET_USER, LOG_OUT } from '../constants/actionTypes';

export default (user = {}, action) => {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case LOG_OUT:
      console.log('user red: ', action.payload);
      return action.payload;
    default:
      return user;
  }
};
