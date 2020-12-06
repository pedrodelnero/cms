import axios from 'axios';
import Cookies from 'universal-cookie';

import { ADD_SITE, GET_USER, SIGN_UP, LOG_IN, LOG_OUT, CHANGE_PASSWORD, FAIL_SIGN_IN, FAIL_SIGN_UP, FAIL_ADD_ACCOUNT, FAIL_CHANGE_PASSWORD } from '../constants/actionTypes';
// import { addSite } from './site';

const cookies = new Cookies();
const token = cookies.get('token');
const options = { path: '/', expires: new Date(new Date().getTime() + (24 * 60 * 60 * 1000)) };

const userAPI = axios.create({
  baseURL: 'http://localhost:5000/user',
  headers: { Authorization: `Bearer ${token}` },
});

const siteAPI = axios.create({
  baseURL: 'http://localhost:5000/site',
  headers: { Authorization: `Bearer ${token}` },
});

export const getUser = () => async (dispatch) => {
  const { data: user } = await userAPI.get('/');

  dispatch({ type: GET_USER, payload: user });
};

export const userSignUp = (site, name, email, password) => async (dispatch) => {
  try {
    const { data: userData } = await userAPI.post('/signup', { site, name, email, password });
    const { data: siteData } = await siteAPI.post('/add', { site, email });
    window.location.href = '/profile';

    cookies.set('token', userData.token, options);
    cookies.set('user', userData.user.user_name, options);
    cookies.set('site', siteData.site_id, options);

    dispatch({ type: SIGN_UP });
    dispatch({ type: ADD_SITE, payload: siteData });

    // tried using dispatch(addSite(name, email)) but the window.locationlhref as not letting the app create cookie for site_id
  } catch (error) {
    dispatch({ type: FAIL_SIGN_UP, payload: error.response.data });
  }
};

export const userLogIn = (email, password) => async (dispatch) => {
  try {
    const { data } = await userAPI.post('/login', { email, password });

    if (!data.user.user_name) {
      cookies.set('token', data.token, options);
      cookies.set('site', data.site.site_id, options);
      window.location.href = '/confirm-new-account';
    } else {
      window.location.href = '/profile';
      cookies.set('token', data.token, options);
      cookies.set('user', data.user.user_name, options);
      cookies.set('site', data.site.site_id, options);
    }

    dispatch({ type: LOG_IN });
  } catch (error) {
    dispatch({ type: FAIL_SIGN_IN, payload: error.response.data });
  }
};

export const userLogOut = () => async (dispatch) => {
  const { data } = await userAPI.post('/logout');
  cookies.remove('site', { path: '/' });
  cookies.remove('token', { path: '/' });
  cookies.remove('user', { path: '/' });

  dispatch({ type: LOG_OUT, payload: data });
};

export const addAccountByAdmin = (email, password, role) => async (dispatch) => {
  try {
    await userAPI.post('/add-account', { email, password, role });
    window.location.href = '/profile';
  } catch (error) {
    dispatch({ type: FAIL_ADD_ACCOUNT, payload: error.response.data });
  }
};

export const changePassword = (currentPassword, newPassword, confirmNewPassword) => async (dispatch) => {
  try {
    await userAPI.patch('/me', { currentPassword, newPassword, confirmNewPassword });
    window.location.href = '/account';

    dispatch({ type: CHANGE_PASSWORD });
  } catch (error) {
    dispatch({ type: FAIL_CHANGE_PASSWORD, payload: error.response.data });
  }
};
