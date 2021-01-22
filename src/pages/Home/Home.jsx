import React, {useLayoutEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {fetchPosts, postsSelector} from '../../slices/posts';
import {Post} from '../../components/Post';

const Home = ({
  currentPage
}) => {
	const dispatch = useDispatch();
	const { posts, loading, hasErrors } = useSelector(postsSelector);

	useLayoutEffect( () => {
		dispatch(fetchPosts(currentPage))
	},[dispatch, currentPage])

	return (
		<>
			{posts.map(post => <Post key={post.id} post={post} excerpt />)}
			<p>Hello</p>
		</>
	);
};

export default Home;
