import { combineReducers } from 'redux';

import blogs from './blogs';
import user from './user';
import users from './users';

export default combineReducers({ blogs, user, users });
