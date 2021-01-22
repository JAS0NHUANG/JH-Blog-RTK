import React, {useEffect, useLayoutEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

import {fetchSinglePost, postSelector} from '../../slices/post';
import {Post} from '../../components/Post';

const SinglePost = () => {
	const dispatch = useDispatch();
	const {id} = useParams();
	const { post, loading, hasErrors } = useSelector(postSelector);

	useLayoutEffect( () => {
		dispatch(fetchSinglePost(id))
	},[dispatch, id])

	return (
		<>
			<Post key={post.id} post={post} />)}
			<p>Hello</p>
		</>
	);
};

export default SinglePost;
