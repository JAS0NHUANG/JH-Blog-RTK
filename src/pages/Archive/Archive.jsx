import React, { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPosts, postsSelector } from "../../slices/posts";
import { userSelector } from "../../slices/user";

import { Post } from "../../components/Post";
import { Loading } from "../../components/Loading";

const Archive = () => {
  const dispatch = useDispatch();
  const { posts, isLoading, hasErrors } = useSelector(postsSelector);
  const { userId } = useSelector(userSelector);

  useLayoutEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const renderPosts = () => {
    if (isLoading) return <Loading />;
    if (hasErrors) return <p>Sorry! Something went wrong...</p>;
    return (
      <>
        {posts.map((post) => (
          <Post key={post.id} post={post} userId={userId} archive />
        ))}
      </>
    );
  };

  return <>{renderPosts()}</>;
};

export default Archive;
