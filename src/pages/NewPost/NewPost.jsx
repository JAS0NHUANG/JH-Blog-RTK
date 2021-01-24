import React, {useLayoutEffect} from 'react';
import {useDispatch} from 'react-redux';

import {clearSinglePost} from '../../slices/post';
import {Editor} from '../../components/Editor';

const NewPost = () => {
  return <Editor />
}

export default NewPost;
