import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../slices/authSlice';
import { fetchGroupPostLikes, deleteGroupPost } from '../../slices/groupsSlice';
import LikeUnlike from './LikeUnlike';

const GroupPost = (props) => {
  const { post } = props;
  const creator = post.user;
  const postId = post.id;

  const { groupId } = useParams();
  const dispatch = useDispatch();

  const likes = useSelector((state) => state.groups.likes);
  const { userAuth } = useSelector(selectAuth);

  const date = post.createdAt;
  const dateData = new Date(date);
  const formattedDate = dateData.toDateString();
  const formattedTime = dateData.toLocaleTimeString('en-US');

  useEffect(() => {
    dispatch(fetchGroupPostLikes({ groupId, postId }));
  }, [dispatch]);

  // console.log('post--> ', post);

  console.log('likes--> ', likes);

  const deletePost = async (e) => {
    e.preventDefault();
    const postId = post.id;
    await dispatch(deleteGroupPost({ groupId, postId }));
  };

  return (
    <div className="bg-white-smoke border rounded-lg shadow-lg font-rubik">
      <div className="p-2">
        <div>
          <p>Content: {post.content}</p>
          {/* <p>Posted by: {user.fullName}</p> */}
          <p>
            Posted at: {formattedTime} on {formattedDate}
          </p>
          <p>Likes: {likes.length}</p>
        </div>
        <div>
          <LikeUnlike
            key={post.id}
            groupId={groupId}
            post={post}
            likes={likes}
            userAuth={userAuth}
          />
        </div>
        {userAuth.id === post.userId && (
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
