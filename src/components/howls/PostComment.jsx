import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../slices/authSlice';
import { deletePostComment } from '../../slices/postsSlice';
import LikeUnlikeComment from './LikeUnlikeComment';

const PostComment = (props) => {
  const { comment, likes } = props;
  //   const postId = post.id;

  // const { groupId } = useParams();
  const dispatch = useDispatch();

  // console.log(comment);

  const { userAuth } = useSelector(selectAuth);

  const date = comment.createdAt;
  const dateData = new Date(date);
  const formattedDate = dateData.toDateString();
  const formattedTime = dateData.toLocaleTimeString('en-US');

  // console.log('post--> ', post);

  // console.log('likes--> ', likes);

  const deleteHandler = async (e) => {
    e.preventDefault();
    const postId = comment.postId;
    const commentId = comment.id;
    await dispatch(deletePostComment({ postId, commentId }));
  };

  return (
    <div className="bg-white-smoke border rounded-lg shadow-lg font-rubik">
      <div className="p-2">
        <div>
          <p>Content: {comment.content}</p>
          <p>By: {comment.user.fullName}</p>
          <p>
            Posted at: {formattedTime} on {formattedDate}
          </p>
          <p>Likes: {likes.length}</p>
          <p>COMMENT ID --> {comment.id}</p>
          <p>POST ID --> {comment.postId}</p>
          <p>USER ID --> {comment.userId}</p>
        </div>
        <div>
          <LikeUnlikeComment
            key={comment.id}
            postId={comment.postId}
            comment={comment}
            likes={likes}
            userAuth={userAuth}
          />
        </div>
        {userAuth.id === comment.userId && (
          <p>
            <button
              onClick={deleteHandler}
              className="p-1 rounded-lg bg-[#cbd5e1] font-mono"
            >
              X
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default PostComment;
