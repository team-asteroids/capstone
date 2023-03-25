import React from 'react';
import { useDispatch } from 'react-redux';
import { likeGroupPost, unlikeGroupPost } from '../../slices/groupsSlice';

const LikeUnlike = (props) => {
  const { groupId, post, likes, userAuth } = props;

  const postId = post.id;

  const dispatch = useDispatch();

  const testLike = () => {
    if (!likes.length) {
      return false;
    } else {
      const likeIds = likes.map((like) => {
        return like.userId;
      });
      if (likeIds.includes(userAuth.id)) {
        return true;
      } else {
        return false;
      }
    }
  };

  const likeUnlikePost = async (e) => {
    e.preventDefault();
    if (testLike()) {
      await dispatch(unlikeGroupPost({ groupId, postId }));
    } else {
      await dispatch(likeGroupPost({ groupId, postId }));
    }
  };

  return (
    <>
      <p>
        <button
          onClick={likeUnlikePost}
          className={`p-1 rounded-lg font-mono ${
            testLike() ? 'bg-[#cbd5e1]' : 'bg-[#fb5607]'
          }`}
        >
          Like
        </button>
      </p>
    </>
  );
};

export default LikeUnlike;
