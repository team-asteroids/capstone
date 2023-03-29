import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../slices/authSlice';
import { addGroupPost } from '../../slices/groupsSlice';

const AddGroupPost = (props) => {
  const { groupId } = props;
  const { userAuth } = useSelector(selectAuth);

  const dispatch = useDispatch();

  const [content, setContent] = useState('');

  const submitPost = async (e) => {
    e.preventDefault();
    // const notify = () => toast('Testing Toast');
    await dispatch(addGroupPost({ groupId, content }));
    // notify();
  };

  return (
    <div>
      <div>
        <form onSubmit={submitPost}>
          <div>
            <label>Post</label>
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
            <button type="submit">Submit Post!</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddGroupPost;
