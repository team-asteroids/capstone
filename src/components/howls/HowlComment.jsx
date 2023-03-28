import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../slices/authSlice';
import { addPostComment } from '../../slices/postsSlice';

const HowlComment = (props) => {
  const { post, userAuth } = props;

  const dispatch = useDispatch();

  const [content, setContent] = useState('');

  const commentHandler = async (e) => {
    e.preventDefault();
    const postId = post.id;
    // const notify = () => toast('Testing Toast');
    await dispatch(addPostComment({ content, postId }));
    // notify();
  };

  return (
    <div>
      <div>
        <form onSubmit={commentHandler}>
          <div>
            <label>Comment:</label>
            <input
              id="content"
              name="content"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
          </div>
          <div>
            <button type="submit">Submit Comment!</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HowlComment;
