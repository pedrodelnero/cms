import axios from 'axios';
import Cookies from 'universal-cookie';

import { GET_USERS } from '../constants/actionTypes';

const cookies = new Cookies();
const token = cookies.get('token');

const userAPI = axios.create({
  baseURL: 'http://localhost:5000/user',
  headers: { Authorization: `Bearer ${token}` },
});

export const getUsers = () => async (dispatch) => {
  const { data: users } = await userAPI.get('/all');

  dispatch({ type: GET_USERS, payload: users });
};
