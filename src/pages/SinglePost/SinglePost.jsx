import React, {useLayoutEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

import {fetchSinglePost, postSelector} from '../../slices/post';
import {fetchMe, userSelector} from '../../slices/user';

import {getAuthToken} from '../../utils/utils';

import {Loading} from '../../components/Loading';
import {Post} from '../../components/Post';

const SinglePost = () => {
	const {id} = useParams();
  const token = getAuthToken();
	const dispatch = useDispatch();
	const {post, isLoading, hasErrors} = useSelector(postSelector);
  const {user, userId} = useSelector(userSelector);

	useLayoutEffect( () => {
		dispatch(fetchSinglePost(id))
    dispatch(fetchMe(token));
	},[dispatch, id, token])

  const renderPost = () => {
    if (isLoading) return (<Loading />);
    if (hasErrors) return (<p>Sorry! Something went wrong...</p>);
    return (<Post key={post.id} post={post} user={user} userId={userId}/>)
  }


	return (
		<>
      {renderPost()}
		</>
	);
};

export default SinglePost;
