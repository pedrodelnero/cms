import axios from 'axios';
import Cookies from 'universal-cookie';

import { ADD_PAGE, DELETE_PAGE, GET_PAGES, GET_PAGE_BY_ID, UPDATE_PAGE } from '../constants/actionTypes';

const cookies = new Cookies();
const token = cookies.get('token');

const api = axios.create({
  baseURL: 'http://localhost:5000/pages',
  headers: { Authorization: `Bearer ${token}` },
});

export const getPages = () => async (dispatch) => {
  const { data: pages } = await api.get('/');

  dispatch({ type: GET_PAGES, payload: pages });
};

export const addPage = (page) => async (dispatch) => {
  const { data } = await api.post('/', page);

  dispatch({ type: ADD_PAGE, payload: data });
};

export const deletePage = (id) => async (dispatch) => {
  await api.delete(`/${id}`);

  dispatch({ type: DELETE_PAGE, payload: id });
  dispatch(getPages());
};

export const updatePage = (id, page) => async (dispatch) => {
  const { data } = await api.patch(`/${id}`, page);

  dispatch({ type: UPDATE_PAGE, payload: data });
};

export const getPageById = (id) => async (dispatch) => {
  const { data: page } = await api.get(`/${id}`);

  dispatch({ type: GET_PAGE_BY_ID, payload: page });
};
