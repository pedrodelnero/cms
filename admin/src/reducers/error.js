import { FAIL_SIGN_IN, FAIL_ADD_ACCOUNT } from '../constants/actionTypes';

export default (error = null, action) => {
  switch (action.type) {
    case FAIL_SIGN_IN:
      return action.payload;
    case FAIL_ADD_ACCOUNT:
      return action.payload;
    default:
      return error;
  }
};
