import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../slices/authSlice';
import { deletePost } from '../../slices/postsSlice';
import LikeUnlikeHowl from './LikeUnlikeHowl';
import AddComment from './AddComment';
import CommentView from './CommentView';
import { format, setMonth, getMonth } from 'date-fns';

const Howl = (props) => {
  const { post, likes, userAuth } = props;
  const content = post.content;
  const comments = post.post_comments;
  const author = post.user.fullName;

  const [commentView, setCommentView] = useState(false);

  const dispatch = useDispatch();

  const date = new Date(post.createdAt);
  // const dateData = new Date(date);
  const formattedDate = format(date, 'MMM d, yyyy');
  const formattedTime = format(date, 'h:m aaa');

  const toggleCommentView = () => {
    setCommentView(!commentView);
  };

  const deleteHandler = async (e) => {
    e.preventDefault();
    const postId = post.id;
    // console.log('postId -->', postId);
    await dispatch(deletePost(postId));
  };

  return (
    <div className="bg-slate-50 border rounded-lg font-rubik w-full">
      <div className="px-8 py-10">
        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-2 items-center">
            <img
              className="w-12 rounded-full"
              src={require('../../img/default-dog.jpg')}
              alt="alt"
            />
            <div className="flex flex-row gap-2">
              <p>{author}</p>
              <p className="text-slate-400">{formattedDate}</p>
            </div>
          </div>
          <div>
            <p>{content}</p>
          </div>
          <div className="flex flex-row gap-5">
            <p>{comments.length} comments</p>
            <p>{likes.length} likes</p>
          </div>

          <div>
            {userAuth && (
              <div className="flex flex-row gap-5 items-center">
                <div>
                  <LikeUnlikeHowl
                    key={post.id}
                    post={post}
                    likes={likes}
                    userAuth={userAuth}
                  />
                </div>
                <div>
                  <button
                    onClick={toggleCommentView}
                    className={
                      commentView
                        ? 'px-4 py-2 text-sm rounded-lg text-bright-white font-semibold bg-bold-pink'
                        : 'px-4 py-2 text-sm rounded-lg font-semibold bg-slate-200'
                    }
                  >
                    COMMENTS
                  </button>
                </div>
                {userAuth &&
                  (userAuth.id === post.creatorId ||
                    userAuth.role === 'admin') && (
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

        {commentView && (
          <>
            <div>
              <CommentView
                post={post}
                comments={comments}
                userAuth={userAuth}
              />
            </div>
            <div>
              <AddComment post={post} userAuth={userAuth} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Howl;
