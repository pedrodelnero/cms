import axios from 'axios';
import Cookies from 'universal-cookie';

import { GET_USER, SIGN_UP, LOG_IN, LOG_OUT } from '../constants/actionTypes';

const cookies = new Cookies();
const token = cookies.get('token');
const options = { path: '/', expires: new Date(new Date().getTime() + (24 * 60 * 60 * 1000)) };

const userAPI = axios.create({
  baseURL: 'http://localhost:5000/user',
  headers: { Authorization: `Bearer ${token}` },
});

export const getUser = () => async (dispatch) => {
  const { data: user } = await userAPI.get('/');

  dispatch({ type: GET_USER, payload: user });
};

export const userSignUp = (site, name, email, password) => async (dispatch) => {
  const { data } = await userAPI.post('/signup', { site, name, email, password });

  window.location.href = '/profile';
  cookies.set('token', data.token, options);
  cookies.set('user', data.user.user_name, options);
  cookies.set('site', data.user.site_name, options);

  dispatch({ type: SIGN_UP });
};

export const userLogIn = (email, password) => async (dispatch) => {
  const { data } = await userAPI.post('/login', { email, password });

  console.log(data);

  if (!data.user.user_name) {
    cookies.set('site', data.user.site_name, options);
    cookies.set('token', data.token, options);
    window.location.href = '/confirm-new-account';
  } else {
    window.location.href = '/profile';
    cookies.set('token', data.token, options);
    cookies.set('user', data.user.user_name, options);
    cookies.set('site', data.user.site_name, options);
  }

  dispatch({ type: LOG_IN });
};

export const userLogOut = () => async (dispatch) => {
  cookies.remove('site', { path: '/' });
  cookies.remove('token', { path: '/' });
  cookies.remove('user', { path: '/' });
  await userAPI.post('/logout');

  dispatch({ type: LOG_OUT });
};
