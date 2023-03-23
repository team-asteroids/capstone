import React from 'react';
import { Link } from 'react-router-dom';

const GroupPost = (props) => {
  const { post, likes } = props;
  const user = post.user;

  const date = post.createdAt;
  const dateData = new Date(date);
  const formattedDate = dateData.toDateString();
  const formattedTime = dateData.toLocaleTimeString('en-US');

  console.log('post--> ', post);

  console.log('likes--> ', likes);

  return (
    <div className="bg-white-smoke border rounded-lg shadow-lg font-mono">
      <div className="p-2">
        <p>Content: {post.content}</p>
        <p>Posted by: {user.fullName}</p>
        <p>
          Posted at: {formattedTime} on {formattedDate}
        </p>
        <p>Likes: {likes.length}</p>
      </div>
    </div>
  );
};

export default GroupPost;
