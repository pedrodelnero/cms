import { combineReducers } from 'redux';

import blogs from './blogs';
import pages from './pages';
import user from './user';
import users from './users';
import site from './site';
import error from './error';

export default combineReducers({ blogs, pages, site, user, users, error });
