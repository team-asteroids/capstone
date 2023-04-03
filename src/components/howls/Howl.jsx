import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../slices/authSlice';
import { deletePost } from '../../slices/postsSlice';
import LikeUnlikeHowl from './LikeUnlikeHowl';
import AddComment from './AddComment';
import CommentView from './CommentView';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';
import { Snackbar, SnackbarContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Howl = (props) => {
  const { post, likes, userAuth } = props;
  const content = post.content;
  const comments = post.post_comments;
  const author = post.user.fullName;

  const [commentView, setCommentView] = useState(false);

  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [color, setColor] = useState('');

  const dispatch = useDispatch();

  const date = new Date(post.createdAt);
  // const dateData = new Date(date);
  const formattedDate = format(date, 'MMM d, yyyy');
  const formattedTime = format(date, 'h:m aaa');

  const toggleCommentView = () => {
    setCommentView(!commentView);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="white"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  const deleteHandler = async (e) => {
    e.preventDefault();
    const postId = post.id;
    await dispatch(deletePost(postId));
    setSnackbarMessage('Howl deleted!');
    setColor('#b388ff');
    setOpen(true);
  };

  return (
    <div className="bg-slate-50 border rounded-lg font-rubik w-full">
      <div className="px-8 py-10">
        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-2 items-center">
            <Link to={`/profile/${post.user.id}`}>
              <img
                className="w-10 h-10 object-cover rounded-full"
                src={post.user.imageSrc || require('../../img/default-dog.jpg')}
                alt="alt"
              />
            </Link>
            <div className="flex flex-row gap-2">
              <Link to={`/profile/${post.user.id}`}>
                <p>{author}</p>
              </Link>
              <p className="text-slate-400">{formattedDate}</p>
            </div>
          </div>
          <div>
            <p>{content}</p>
          </div>
          <div className="flex flex-row gap-5">
            <p>{likes.length} likes</p>
            <p>{comments.length} comments</p>
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
        <div>
          {commentView && (
            <div>
              <Divider className="pt-5" />
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
            </div>
          )}
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <SnackbarContent
          message={snackbarMessage}
          action={action}
          autoHideDuration={3000}
          style={{
            backgroundColor: `${color}`,
          }}
        />
      </Snackbar>
    </div>
  );
};

export default Howl;
