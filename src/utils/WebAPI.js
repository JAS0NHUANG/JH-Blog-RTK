import { getAuthToken } from "./utils";

const API_URL = "https://student-json-api.lidemy.me";

export const getPostsFromAPI = async (page) => {
  let responseData;
  if (page) {
    responseData = await fetch(
      `${API_URL}/posts?_sort=createdAt&_order=desc&_limit=5&_page=${page}`
    );
  } else {
    responseData = await fetch(`${API_URL}/posts?_sort=createdAt&_order=desc`);
  }
  const jsonData = await responseData.json();
  const result = {
    posts: jsonData,
    totalPosts: Number(responseData.headers.get("x-total-count")),
    page: page,
  };
  return result;
};

export const getSinglePostFromAPI = async (id) => {
  const responseData = await fetch(`${API_URL}/posts?id=${id}`);
  const jsonData = await responseData.json();
  return jsonData[0];
};

export const getMeFromAPI = async () => {
  const token = getAuthToken();
  let responseData;
  try {
	  responseData = await fetch(`${API_URL}/me`, {
		headers: {
		  authorization: `Bearer ${token}`,
		},
	  });
  } catch (error) {
	  responseData = error; 
  }
  const jsonData = await responseData.json();
  return jsonData;
};

export const loginAPI = async (username, password) => {
  const responseData = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  const jsonData = await responseData.json();
  return jsonData;
};

export const sendPostAPI = async (title, body) => {
  const token = getAuthToken();
  const responseData = await fetch(`${API_URL}/posts`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title,
      body,
    }),
  });
  const jsonData = await responseData.json();
  return jsonData;
};

export const updatePostAPI = async (title, body, id) => {
  const token = getAuthToken();
  const responseData = await fetch(`${API_URL}/posts/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title,
      body,
    }),
  });
  const jsonData = await responseData.json();
  return jsonData;
};

export const deletePostAPI = async (id) => {
  const responseData = await fetch(`${API_URL}/posts/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  });
  const jsonData = await responseData.json();
  return jsonData;
};
