import { useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../slices/authSlice';
import { addPost } from '../../slices/postsSlice';

const AddHowl = () => {
  const { userAuth } = useSelector(selectAuth);

  const dispatch = useDispatch();

  const [content, setContent] = useState('');

  const submitPost = async (e) => {
    e.preventDefault();
    // const notify = () => toast('Testing Toast');
    await dispatch(addPost({ content }));
    setContent('');
    toast();
    // notify();
  };

  const labelClass = 'font-rubikmono text-xl text-left pb-3';

  const commentBox =
    'w-full appearance-none border-slate-400 leading-tight block rounded-lg p-5 bg-bright-white focus:border-bold-blue focus:outline-none';

  const disabledBox =
    'w-full appearance-none leading-tight block rounded-lg p-5  border-slate-400 w-full bg-slate-200/50 focus:border-bold-blue focus:outline-none';

  const buttonClass =
    'text-sm px-4 py-3 text-bright-white rounded-lg bg-bold-purple font-semibold ease-in-out duration-100 hover:bg-pale-purple';

  const disabledButtonClass =
    'cursor-default text-sm px-4 py-3 text-bright-white rounded-lg bg-pale-purple font-semibold';

  const toast = useToast();

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
      </div>
    </div>
  );
};

export default AddHowl;
