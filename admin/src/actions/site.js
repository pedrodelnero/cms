import axios from 'axios';
import Cookies from 'universal-cookie';

import { GET_SITE, UPDATE_SITE_INFO } from '../constants/actionTypes';
// import { ADD_SITE, GET_SITE, UPDATE_SITE_INFO } from '../constants/actionTypes';

const cookies = new Cookies();
const token = cookies.get('token');
// const options = { path: '/', expires: new Date(new Date().getTime() + (24 * 60 * 60 * 1000)) };

const siteAPI = axios.create({
  baseURL: 'http://localhost:5000/site',
  headers: { Authorization: `Bearer ${token}` },
});

// export const addSite = (site, email) => async (dispatch) => {
//   const { data } = await siteAPI.post('/add', { site, email });

//   cookies.set('site', data.site_id, options);

//   dispatch({ type: ADD_SITE, payload: data });
// };

export const getSite = (name) => async (dispatch) => {
  const { data } = await siteAPI.get(`${name}`);

  dispatch({ type: GET_SITE, payload: data });
};

export const updateSite = (site) => async (dispatch) => {
  const { data } = await siteAPI.patch('/update', site);

  dispatch({ type: UPDATE_SITE_INFO, payload: data });
};

