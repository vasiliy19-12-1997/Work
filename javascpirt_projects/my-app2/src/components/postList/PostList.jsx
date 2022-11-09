import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PostItem from "../postItem/PostItem";

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return (
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        Posts doent found!!
      </h1>
    );
  }
  return (
    <div>
      <h1>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem remove={remove} post={post} number={index + 1} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
