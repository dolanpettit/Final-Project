import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="DolanPettit"
          src="/static/images/avatar/1.jpg"
        ></Avatar>
        <h3>Username</h3>
      </div>
      <img
        className="post__image"
        src="https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
        alt=""
      ></img>
      <h4 className="post__text">
        <strong>dolanpettit</strong> My first post!
      </h4>
    </div>
  );
}

export default Post;
