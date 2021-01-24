import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';

import {fetchMe, userSelector} from '../slices/user';

import {getAuthToken} from '../utils/utils';

const EditorTitle = styled.input`
  font-size: 28px;
  text-align: left;
  margin: 15px;
  padding: 15px 15px 0;
  border: none;
  border-bottom: 2px solid #cccdcf;
  width: 80%;
`

const EditorBody = styled.textarea`
  text-align: left;
  margin: 15px;
  padding: 10px;
  width: 80%;
  resize: none;
  height: 500px;
`

export const Editor = ({
  post,
}) => {
  const dispatch = useDispatch();
  const token = getAuthToken();
  const {user} = useSelector(userSelector);

  useEffect( () => {
    dispatch(fetchMe(token));
  }, [dispatch, token])

  let title = '';
  let body = '';
  if (typeof post !== 'undefined') {
    title = post.title;
    body = post.body;
  }

  const [inputs, setInputs] = useState(() => 
    ({
      postTitle: title,
      postBody: body,
    })
  )
  const {postTitle, postBody } = inputs;

  const handleChange = event => {
    const {name, value} = event.target;
    setInputs(inputs => ({...inputs, [name]:value}));
  }

  const handleSubmit = event => {
  }
  if (!user) {
    return <div>You are now allowed here!</div>
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
      <br/>
      <button>Submit</button>
    </form>
  )
}

export default Editor;
