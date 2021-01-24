import React, {useLayoutEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';

import {fetchSinglePost, clearSinglePost, postSelector} from '../../slices/post';
import {Loading} from '../../components/Loading';
import {Editor} from '../../components/Editor';

const EditPost = () => {
	const dispatch = useDispatch();
  const {id} = useParams();
	const { post, isLoading, hasErrors } = useSelector(postSelector);
  const history = useHistory()

	useLayoutEffect( () => {
      dispatch(fetchSinglePost(id))
      return (()=>{
        dispatch(clearSinglePost())
      })
	},[dispatch, id, history])

  const renderEditor = () => {
    if (isLoading) return <Loading />
    if (hasErrors) return <p>Something went wrong...</p>
    return <Editor key={post.id} post={post} /> 
  }

  return (
    <>
      {renderEditor()}
    </>
  )
}

export default EditPost;
