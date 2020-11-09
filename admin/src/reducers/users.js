import { GET_USERS, LOG_IN } from '../constants/actionTypes';

export default (user = [], action) => {
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    default:
      return user;
  }
};
