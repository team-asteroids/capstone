import React from 'react';
import { useDispatch } from 'react-redux';
import { likeGroupPost, unlikeGroupPost } from '../../slices/groupsSlice';
import PetsIcon from '@mui/icons-material/Pets';

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
          className={`px-4 py-2 text-sm font-semibold rounded-lg ${
            testLike() ? 'bg-bold-blue text-bright-white' : 'bg-slate-200'
          }`}
        >
          <PetsIcon style={{ color: 'bg-bold-blue' }} />
        </button>
      </p>
    </>
  );
};

export default LikeUnlike;
