import axios from "axios";
import Cookies from "universal-cookie";

import {
  ADD_BLOG,
  GET_BLOGS,
  DELETE_BLOG,
  UPDATE_BLOG,
  GET_BLOG_BY_ID,
} from "../constants/actionTypes";

const cookies = new Cookies();
const token = cookies.get("token");

const api = axios.create({
  baseURL: "https://pdn-cms-server.herokuapp.com/blogs",
  // baseURL: 'http://localhost:5000/blogs',
  headers: { Authorization: `Bearer ${token}` },
});

export const getBlogs = () => async (dispatch) => {
  const { data: blogs } = await api.get("/admin");

  dispatch({ type: GET_BLOGS, payload: blogs });
};

export const addBlog = (blog) => async (dispatch) => {
  const { data } = await api.post("/", blog);

  dispatch({ type: ADD_BLOG, payload: data });
};

export const deleteBlog = (id) => async (dispatch) => {
  await api.delete(`/${id}`);

  dispatch({ type: DELETE_BLOG, payload: id });
  dispatch(getBlogs());
};

export const updateBlog = (id, blog) => async (dispatch) => {
  const { data } = await api.patch(`/${id}`, blog);

  dispatch({ type: UPDATE_BLOG, payload: data });
};

export const getBlogById = (id) => async (dispatch) => {
  const { data: blog } = await api.get(`/${id}`);

  dispatch({ type: GET_BLOG_BY_ID, payload: blog });
};
