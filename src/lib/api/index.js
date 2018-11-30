import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

const API_BASE_URL = `${process.env.REACT_APP_API_URL}/api`;
const apiUrl = url => `${API_BASE_URL}${url}`;

const create = (url, config = {}) => instance.post(apiUrl(url), config);
const read = (url, config = {}) => instance.get(apiUrl(url), config);
const update = (url, config = {}) => instance.patch(apiUrl(url), config);
const destroy = (url, config = {}) => instance.delete(apiUrl(url), config);

export default {
  create,
  read,
  update,
  destroy
};
