import React, {useLayoutEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {fetchPosts, postsSelector} from '../../slices/posts';
import {Post} from '../../components/Post';
import {Loading} from '../../components/Loading';
import {Pagination} from '../../components/Pagination';

const Home = () => {
	const dispatch = useDispatch();
	const { posts, totalPosts, currentPage, isLoading, hasErrors } = useSelector(postsSelector);

	useLayoutEffect( () => {
		dispatch(fetchPosts(currentPage))
	},[dispatch, currentPage])

  const handlePagination = pageNumber => {
    dispatch(fetchPosts(pageNumber))
  }

  const renderPosts = () => {
    if (isLoading) return (<Loading />);
    if (hasErrors) return (<p>Sorry! Something went wrong...</p>);
    return (
      <>
			  {posts.map(post => <Post key={post.id} post={post} excerpt />)}
        <Pagination
          currentPage={currentPage}
          totalPosts={totalPosts}
          handlePagination={handlePagination}
        />
      </>
    )
  }

	return (
		<>
    {renderPosts()}
		</>
	);
};

export default Home;
