import { FAIL_SIGN_IN, FAIL_SIGN_UP, FAIL_ADD_ACCOUNT, FAIL_CHANGE_PASSWORD } from '../constants/actionTypes';

export default (error = null, action) => {
  switch (action.type) {
    case FAIL_SIGN_IN:
      return action.payload;
    case FAIL_SIGN_UP:
      return action.payload;
    case FAIL_ADD_ACCOUNT:
      return action.payload;
    case FAIL_CHANGE_PASSWORD:
      return action.payload;
    default:
      return error;
  }
};
