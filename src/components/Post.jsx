import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const PostWrapper = styled.div`
  text-align: left;
  margin: 30px 70px 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #cacdcc;
`

const PostCreatedAt = styled.p`
  margin: 0;
  color: #abacad;
  text-align: left;
`

const PostTitle = styled.h2`
  margin: 10px 0 25px;
  font-weight: bold;
  font-size: 28px;
  text-align: left;
  padding: 5px;
  transition: all ease-in-out 0.5s;
  overflow-wrap: break-word;
  ${props =>
    props.$singlePost !== true &&
    `
      :hover {
        color: #fff;
        background: #aaacaf;
      }
    `
  }
`

const ModPost = styled(Link)`
  display: inline-block;
  margin: 5px 25px;
  padding: 5px;
  border: 2px solid #abacad;
`

const DeletePost = styled.div`
  display: inline-block;
  margin: 5px 25px;
  padding: 5px;
  border: 2px solid #abacad;
  cursor: pointer;
`

const PostContent = styled.p`
  padding: 5px 25px;
  text-align: left;
  white-space: pre-wrap;
  overflow-wrap: break-word;
`

const ReadMore = styled(Link)`
  margin: 5px 25px;
  text-align: left;
  text-decoration: underline #aaacaf solid 3px;
  transition: all ease-in-out 0.5s;
  :hover {
    color: #fff;
    background: #aaacaf;
  }
`

export const Post = ({post, user, userId, excerpt, handleDeletePost}) => {
  const createdAt = new Date(post.createdAt).toLocaleString()
  return (
    <PostWrapper>
      <PostCreatedAt>
        {createdAt.split(',')[0]}
      </PostCreatedAt>
      {
        excerpt ? (
          <Link to={`/post/${post.id}`}>
          <PostTitle>
              {post.title}
          </PostTitle>
          </Link>
        ) : (
          <PostTitle $singlePost={true}>
            {post.title}
          </PostTitle>
        )
      }
      {userId === post.userId && <ModPost to={`/edit-post/${post.id}`}>Edit</ModPost>}
      {userId === post.userId && <DeletePost onClick={handleDeletePost}>Delete</DeletePost>}
      <PostContent>
        {excerpt && post.body.length > 99 ? `${post.body.substring(0, 100)}...` : post.body}
      </PostContent>
      {
        excerpt &&
        post.body.length > 99 &&
        <ReadMore to={`/post/${post.id}`}>Read More...</ReadMore>
      }
    </PostWrapper>
  )
}
