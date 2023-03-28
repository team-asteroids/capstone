import React from 'react';
import { useDispatch } from 'react-redux';
import { likePost, unlikePost } from '../../slices/postsSlice';

const LikeUnlikeHowl = (props) => {
  const { post, likes, userAuth } = props;

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
      await dispatch(unlikePost(postId));
    } else {
      await dispatch(likePost(postId));
    }
  };

  return (
    <>
      <p>
        <button
          onClick={likeUnlikePost}
          className={`p-1 rounded-lg font-mono ${
            testLike() ? 'bg-[#fb5607]' : 'bg-[#cbd5e1]'
          }`}
        >
          Like
        </button>
      </p>
    </>
  );
};

export default LikeUnlikeHowl;
