import React from 'react';
import { useDispatch } from 'react-redux';
import { likeComment, unlikeComment } from '../../slices/postsSlice';
import PetsIcon from '@mui/icons-material/Pets';

const LikeUnlikeComment = (props) => {
  const { comment, likes, userAuth } = props;
  const postCommentId = comment.id;

  const dispatch = useDispatch();

  console.log('likes -->', likes);

  const testLike = () => {
    if (!likes.length) {
      return false;
    } else {
      const likeIds = likes.map((like) => {
        return like.userId;
      });
      console.log('likeIds -->', likeIds);
      console.log('userAuth -->', userAuth.id);
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
      await dispatch(unlikeComment({ postCommentId }));
    } else {
      await dispatch(likeComment({ postCommentId }));
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

export default LikeUnlikeComment;
