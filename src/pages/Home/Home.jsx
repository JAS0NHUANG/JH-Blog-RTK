import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {fetchPosts} from '../../slices/posts';

const Home = ({
  currentPage
}) => {
  const dispatch = useDispatch();
  useEffect( () => {
    dispatch(fetchPosts(currentPage))
  },[dispatch, currentPage])
	return (
		<p>Hello</p>
	);
};

export default Home;
