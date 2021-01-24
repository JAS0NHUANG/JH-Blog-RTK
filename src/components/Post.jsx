import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { MEDIA_QUERY_S } from "./constants/Breakpoints";

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={tomorrow}
      showLineNumbers={true}
      customStyle={{
        maxWidth: "80vw",
      }}
    >
      {value || ""}
    </SyntaxHighlighter>
  );
};

const PostWrapper = styled.div`
  text-align: left;
  padding-bottom: 20px;
  border-bottom: 1px solid #cacdcc;

  ${MEDIA_QUERY_S} {
    margin: 30px 70px 20px;
  }
`;

const PostCreatedAt = styled.p`
  margin: 0;
  color: #abacad;
  text-align: left;
`;

const PostTitle = styled.h2`
  transition: all ease-in-out 0.5s;
  overflow-wrap: break-word;
  ${(props) =>
    props.$singlePost !== true &&
    `
      :hover {
        color: #fff;
        background: #aaacaf;
      }
    `
  }
`;

const EditPost = styled(Link)`
  display: inline-block;
  margin: 5px 25px;
  padding: 5px;
  border: 2px solid #abacad;
`;

const DeletePost = styled.div`
  display: inline-block;
  margin: 5px 25px;
  padding: 5px;
  border: 2px solid #abacad;
  cursor: pointer;
`;

const ReadMore = styled(Link)`
  display: inline-block;
  margin: 15px 25px;
  text-align: left;
  text-decoration: underline #aaacaf solid 3px;
  transition: all ease-in-out 0.5s;
  :hover {
    color: #fff;
    background: #aaacaf;
  }
`;

const Markdown = styled(ReactMarkdown)`
  & > * {
    overflow-wrap: break-word;
    white-space: pre-wrap;
    text-align: left;
    ${MEDIA_QUERY_S} {
      padding: 5px 25px;
    }
  }
`;

export const Post = ({
  post,
  user,
  userId,
  excerpt,
  archive,
  handleDeletePost,
}) => {
  const createdAt = new Date(post.createdAt).toLocaleString();
  return (
    <PostWrapper>
      <PostCreatedAt>{createdAt.split(",")[0]}</PostCreatedAt>
      {excerpt || archive ? (
        <Link to={`/post/${post.id}`}>
          <PostTitle>{post.title}</PostTitle>
        </Link>
      ) : (
        <PostTitle $singlePost={true}>{post.title}</PostTitle>
      )}
      {userId === post.userId && (
        <EditPost to={`/edit-post/${post.id}`}>Edit</EditPost>
      )}
      {userId === post.userId && (
        <DeletePost
          onClick={() => {
            if (window.confirm("Delete this post?")) {
              handleDeletePost(post.id);
            }
          }}
        >
          Delete
        </DeletePost>
      )}
      {!archive && (
        <Markdown renderers={{ code: CodeBlock }}>
          {excerpt && post.body.length > 99
            ? `${post.body.substring(0, 200)}...`
            : post.body}
        </Markdown>
      )}
      {(excerpt && post.body.length > 99) && (
        <ReadMore to={`/post/${post.id}`}>Read More...</ReadMore>
      )}
    </PostWrapper>
  );
};
