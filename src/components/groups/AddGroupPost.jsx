import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../slices/authSlice';
import { addGroupPost } from '../../slices/groupDetailsSlice';

const AddGroupPost = (props) => {
  const { groupId } = props;
  const { userAuth } = useSelector(selectAuth);

  const dispatch = useDispatch();

  const [content, setContent] = useState('');

  const submitPost = async (e) => {
    e.preventDefault();
    await dispatch(addGroupPost({ groupId, content }));
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
