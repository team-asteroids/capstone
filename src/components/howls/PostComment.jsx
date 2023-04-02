import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../slices/authSlice';
import { deletePostComment } from '../../slices/postsSlice';
import LikeUnlikeComment from './LikeUnlikeComment';
import { format } from 'date-fns';
import { Divider } from '@mui/material';

const PostComment = (props) => {
  const { comment, likes } = props;
  //   const postId = post.id;

  // const { groupId } = useParams();
  const dispatch = useDispatch();

  // console.log(comment);

  const { userAuth } = useSelector(selectAuth);

  const date = new Date(comment.createdAt);
  // const dateData = new Date(date);
  const formattedDate = format(date, 'MMM d, yyyy');
  const formattedTime = format(date, 'h:m aaa');

  // console.log('post--> ', post);

  // console.log('likes--> ', likes);

  const deleteHandler = async (e) => {
    e.preventDefault();
    const postId = comment.postId;
    const commentId = comment.id;
    await dispatch(deletePostComment({ postId, commentId }));
  };

  return (
    <div className="bg-slate-100 px-8 py-5 rounded-lg font-rubik">
      <div className="flex flex-col gap-5">
        <div className="flex flex-row gap-2 items-center">
          <Link to={`/profile/${comment.user.id}`}>
            <img
              className="w-10 h-10 rounded-full"
              src={require('../../img/default-dog.jpg')}
              alt="alt"
            />
          </Link>
          <div className="flex flex-row gap-2">
            <Link to={`/profile/${comment.user.id}`}>
              <p>{comment.user.fullName}</p>
            </Link>
            <p className="text-slate-400">{formattedDate}</p>
          </div>
        </div>
        <div>
          <p>{comment.content}</p>
        </div>
        <div className="flex flex-row items-center gap-3">
          <p>{likes.length} likes</p>
          <div>
            {userAuth && (
              <div className="flex flex-row gap-3 items-center">
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
                      className="p-1 rounded-lg font-semibold text-sm text-red-600"
                    >
                      (DELETE)
                    </button>
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostComment;
