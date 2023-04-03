import React from 'react';
import { useDispatch } from 'react-redux';
import { likePost, unlikePost } from '../../slices/postsSlice';
import PetsIcon from '@mui/icons-material/Pets';

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
      await dispatch(unlikePost({ postId }));
    } else {
      await dispatch(likePost({ postId }));
    }
  };

  return (
    <>
      <p>
        <button
          onClick={likeUnlikePost}
          className={`px-4 py-2 text-sm font-semibold rounded-lg `}
        >
          <PetsIcon color={`${testLike() ? 'primary' : 'disabled'}`} />
        </button>
      </p>
    </>
  );
};

export default LikeUnlikeHowl;
