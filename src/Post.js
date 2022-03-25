//  دي بتاع المكتبه الي مستخدمها بنتاع ال flap move
import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import InputOption from "./InputOption";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

const Post = forwardRef(({name, description, message, photoUrl }, ref) => {
  const user = useSelector(selectUser);

  return (
    <div ref={ref} className="post">
      <div className="post__header">
       <Avatar src={photoUrl}> {user?.displayName[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpIcon} title="Like" color="gray" />
        <InputOption Icon={CommentIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareIcon} title="Share" color="gray" />
        <InputOption Icon={SendIcon} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
