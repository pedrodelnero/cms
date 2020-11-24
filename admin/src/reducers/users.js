import { GET_USERS, DELETE_USERS } from '../constants/actionTypes';

export default (users = [], action) => {
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    case DELETE_USERS:

      return users.filter((user) => !action.payload.includes(String(user.user_id)));
    default:
      return users;
  }
};
