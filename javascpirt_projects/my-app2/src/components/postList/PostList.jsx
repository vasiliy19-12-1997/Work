import React from "react";
import PostItem from "../postItem/PostItem";

const PostList = ({ posts, title }) => {
  if (!posts.length) {
    return <h1>Posts doent found</h1>;
  }
  return (
    <div>
      <h1>{title}</h1>
      {posts.map((post, index) => (
        <PostItem post={post} number={index + 1} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
