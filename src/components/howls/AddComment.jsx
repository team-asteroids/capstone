import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../slices/authSlice';
import { addPostComment } from '../../slices/postsSlice';
import { Divider } from '@mui/material';
import { Snackbar, SnackbarContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const AddComment = (props) => {
  const { post, userAuth } = props;

  const dispatch = useDispatch();

  const [content, setContent] = useState('');

  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [color, setColor] = useState('');

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

  const commentHandler = async (e) => {
    e.preventDefault();
    const postId = post.id;

    await dispatch(addPostComment({ content, postId }));
    setSnackbarMessage('Howl posted!');
    setContent('');
    setColor('#64b5f6');
    setOpen(true);
  };

  const labelClass = 'text-sm font-semibold font-rubik mb-3';

  const commentBox =
    'w-full appearance-none border-slate-400 leading-tight block rounded-lg p-5 bg-bright-white focus:border-bold-blue focus:outline-none';

  const disabledBox =
    'w-full appearance-none leading-tight block rounded-lg p-5  border-slate-400 w-full bg-slate-200/50 focus:border-bold-blue focus:outline-none';

  const buttonClass =
    'text-sm px-4 py-3 text-bright-white rounded-lg bg-bold-purple font-semibold ease-in-out duration-100 hover:bg-pale-purple';

  const disabledButtonClass =
    'cursor-default text-sm px-4 py-3 text-bright-white rounded-lg bg-pale-purple font-semibold';

  return (
    <div>
      <div className="pl-10">
        {post.post_comments.length ? <Divider /> : null}
        <fieldset disabled={userAuth && userAuth.id ? false : true}>
          <form onSubmit={commentHandler}>
            <div className="flex flex-wrap pt-5 mb-5">
              <div className="w-full flex flex-col">
                <label className={labelClass}>ADD HOWL</label>
                <textarea
                  id="content"
                  name="content"
                  className={userAuth && userAuth.id ? commentBox : disabledBox}
                  placeholder={
                    userAuth && userAuth.id
                      ? 'put your paw in the ring...'
                      : 'must be logged in to howl'
                  }
                  rows={3}
                  value={content}
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                />
              </div>
            </div>
            <div>
              <button
                className={
                  content && userAuth && userAuth.id
                    ? buttonClass
                    : disabledButtonClass
                }
                disabled={userAuth && userAuth.id ? false : true}
                type="submit"
              >
                POST HOWL
              </button>
            </div>
          </form>
        </fieldset>
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

export default AddComment;
