import {getAuthToken} from './utils'

const API_URL = 'https://student-json-api.lidemy.me';

export const getPostsFromAPI = async (page) => {
  const responseData = await fetch(
    `${API_URL}/posts?_sort=createdAt&_order=desc&_limit=5&_page=${page}`
  );
  const jsonData = await responseData.json();
  const result = {
    'posts': jsonData,
    'totalPosts': Number(responseData.headers.get('x-total-count')),
    'page': page,
  }
  console.log(result)
  return result;
};

export const getSinglePostFromAPI = async (id) => {
  const responseData = await fetch(
    `${API_URL}/posts?id=${id}`
  );
  const jsonData = await responseData.json();
  return jsonData[0];
};

export const getMeFromAPI = async () => {
  const token = getAuthToken();
  const responseData = await fetch(
    `${API_URL}/me`,
    {
      headers: {
        'authorization': `Bearer ${token}`,
      },
    }
  );
  const jsonData = await responseData.json();
  return jsonData;
};

export const loginAPI = async (username, password) => {
  const responseData = await fetch(
    `${API_URL}/login`,
    {
      method: 'POST',
      headers: {
        'content-type':'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }
  );
  const jsonData = await responseData.json();
  return jsonData;
};

export const sendPostAPI = async (title, body) => {
  const token = getAuthToken();
  const responseData = await fetch(
    `${API_URL}/posts`,
    {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        body,
      })
    }
  );
  const jsonData = await responseData.json();
  return jsonData;
};

export const updatePostAPI = async (title, body, id) => {
  const token = getAuthToken();
  const responseData = await fetch(
    `${API_URL}/posts/${id}`,
    {
      method: "PATCH",
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        body,
      })
    }
  );
  const jsonData = await responseData.json();
  return jsonData;
};

export const deletePostAPI = async (id) => {
  const responseData = await fetch(
    `${API_URL}/posts/${id}`,
    {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    }
  );
  const jsonData = await responseData.json();
  return jsonData;
};
