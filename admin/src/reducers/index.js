import { combineReducers } from 'redux';

import blogs from './blogs';
import pages from './pages';
import user from './user';
import users from './users';
import error from './error';

export default combineReducers({ blogs, pages, user, users, error });
