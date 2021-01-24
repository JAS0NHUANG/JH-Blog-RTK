import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { fetchMe, userSelector } from "../slices/user";
import {
  sendPostRequest,
  clearPostResponseData,
  editorSelector,
} from "../slices/editor";

const EditorTitle = styled.input`
  font-size: 28px;
  text-align: left;
  margin: 15px;
  padding: 15px 15px 0;
  border: none;
  border-bottom: 2px solid #cccdcf;
  width: 80%;
`;

const EditorBody = styled.textarea`
  text-align: left;
  margin: 15px;
  padding: 10px;
  width: 80%;
  resize: none;
  height: 500px;
`;

export const Editor = ({ post }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector(userSelector);
  const { postResponse } = useSelector(editorSelector);

  useEffect(() => {
    dispatch(fetchMe());
    console.log(postResponse);
    if (postResponse && postResponse.id) {
      history.push(`/post/${postResponse.id}`);
    }
    return () => {
      dispatch(clearPostResponseData());
    };
  }, [dispatch, postResponse, history]);

  let title = "";
  let body = "";
  if (typeof post !== "undefined") {
    title = post.title;
    body = post.body;
  }

  const [inputs, setInputs] = useState(() => ({
    postTitle: title,
    postBody: body,
  }));
  const { postTitle, postBody } = inputs;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { postTitle, postBody } = inputs;
    let id = null;
    if (typeof post !== "undefined") {
      id = post.id;
    }
    await dispatch(sendPostRequest(postTitle, postBody, id));
    console.log(postResponse);
  };

  if (!user) {
    return <div>You are now allowed here!</div>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <EditorTitle
        type="text"
        name="postTitle"
        value={postTitle}
        placeholder="Title"
        onChange={handleChange}
      />
      <EditorBody
        type="textarea"
        name="postBody"
        value={postBody}
        onChange={handleChange}
      />
      <br />
      <button>Submit</button>
    </form>
  );
};

export default Editor;
