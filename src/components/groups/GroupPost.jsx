import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../slices/authSlice';
import { deleteGroupPost } from '../../slices/groupsSlice';

const GroupPost = (props) => {
  const { post, likes } = props;
  const user = post.user;

  const { groupId } = useParams();

  const { userAuth } = useSelector(selectAuth);
  const dispatch = useDispatch();

  const date = post.createdAt;
  const dateData = new Date(date);
  const formattedDate = dateData.toDateString();
  const formattedTime = dateData.toLocaleTimeString('en-US');

  // console.log('post--> ', post);

  //   console.log('likes--> ', likes);

  const deletePost = async (e) => {
    e.preventDefault();
    const postId = post.id;
    await dispatch(deleteGroupPost({ groupId, postId }));
  };

  return (
    <div className="bg-white-smoke border rounded-lg shadow-lg font-rubik">
      <div className="p-2">
        <p>Content: {post.content}</p>
        <p>Posted by: {user.fullName}</p>
        <p>
          Posted at: {formattedTime} on {formattedDate}
        </p>
        <p>Likes: {likes.length}</p>
        {userAuth.id === user.id && (
          <p>
            <button
              onClick={deletePost}
              className="p-1 rounded-lg bg-[#cbd5e1] font-mono"
            >
              X
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default GroupPost;
