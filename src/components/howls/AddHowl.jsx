import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../slices/authSlice';
import { addPost } from '../../slices/postsSlice';
import { Snackbar, IconButton, CloseIcon } from '@mui/material';

const AddHowl = () => {
  const { userAuth } = useSelector(selectAuth);

  const dispatch = useDispatch();

  const [content, setContent] = useState('');
  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const submitPost = async (e) => {
    e.preventDefault();
    const response = await dispatch(addPost({ content }));
    if (response.type === '/addPost/fulfilled') {
      setSnackbarMessage('Howl posted!');
    } else {
      if (response.error.message === 'Request failed with status code 409') {
        setSnackbarMessage(
          `Arf! We've sniffed out a duplicate post. Try an original!`
        );
      }
    }
    setOpen(true);
    setContent('');
  };

  const handleClose = () => {
    setOpen(false);
  };

  const labelClass = 'font-rubikmono text-xl text-left pb-3';

  const commentBox =
    'w-full appearance-none border-slate-400 leading-tight block rounded-lg p-5 bg-bright-white focus:border-bold-blue focus:outline-none';

  const disabledBox =
    'w-full appearance-nonegit push leading-tight block rounded-lg p-5  border-slate-400 w-full bg-slate-200/50 focus:border-bold-blue focus:outline-none';

  const buttonClass =
    'text-sm px-4 py-3 text-bright-white rounded-lg bg-bold-purple font-semibold ease-in-out duration-100 hover:bg-pale-purple';

  const disabledButtonClass =
    'cursor-default text-sm px-4 py-3 text-bright-white rounded-lg bg-pale-purple font-semibold';

  return (
    <div className="font-rubik pt-3">
      <div>
        <fieldset disabled={userAuth && userAuth.id ? false : true}>
          <form onSubmit={submitPost}>
            <div className="flex flex-wrap mb-5">
              <div className="w-full flex flex-col">
                <label className={labelClass}>Post Howl</label>
                <textarea
                  id="content"
                  name="content"
                  placeholder={
                    userAuth && userAuth.id
                      ? 'awoooo...'
                      : 'must be logged in to howl'
                  }
                  required
                  rows={5}
                  className={userAuth && userAuth.id ? commentBox : disabledBox}
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
        <Snackbar
          open={open}
          autoHideDuration={4000}
          onClose={handleClose}
          message={snackbarMessage}
        />
      </div>
    </div>
  );
};

export default AddHowl;
