import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../slices/authSlice';
import { deleteGroupPost } from '../../slices/groupsSlice';
import LikeUnlike from './LikeUnlike';
import { Snackbar, SnackbarContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { format } from 'date-fns';

const GroupPost = (props) => {
  const { post, likes, memberIds, user } = props;

  const { groupId } = useParams();
  const dispatch = useDispatch();

  const { userAuth } = useSelector(selectAuth);

  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [color, setColor] = useState('');

  const date = new Date(post.createdAt);
  // const dateData = new Date(date);
  const formattedDate = format(date, 'MMM d, yyyy');
  const formattedTime = format(date, 'h:m aaa');

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
    await dispatch(deleteGroupPost({ groupId, postId }));
    setSnackbarMessage('Howl deleted!');
    setColor('#b388ff');
    setOpen(true);
  };

  return (
    <div className="bg-slate-50 border rounded-lg font-rubik min-w-full">
      <div className="p-8 py-10">
        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-2 items-center min-w-fit">
            <Link to={`/profile/${post.id}`}>
              <img
                className="w-10 h-10 rounded-full"
                src={require('../../img/default-dog.jpg')}
                alt="alt"
              />
            </Link>
            <div className="flex flex-row gap-2">
              <Link to={`/profile/${post.id}`}>
                <p>{post.user.fullName}</p>
              </Link>
              <p className="text-slate-400">{formattedDate}</p>
            </div>
          </div>
          <div className="flex overflow-wrap break-words">
            <p className="break-words">{post.content}</p>
          </div>
          <div className="flex flex-row items-center gap-3">
            <p>{likes.length} likes</p>
            <div>
              {memberIds.includes(userAuth.id) && (
                <div className="flex flex-row gap-3 items-center">
                  <LikeUnlike
                    key={post.id}
                    groupId={groupId}
                    post={post}
                    likes={likes}
                    userAuth={userAuth}
                  />
                </div>
              )}
            </div>
            {userAuth.id === post.userId && (
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

export default GroupPost;
