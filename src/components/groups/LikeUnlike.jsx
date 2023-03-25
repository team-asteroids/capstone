import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { likeGroupPost, unlikeGroupPost } from '../../slices/groupsSlice';

const LikeUnlike = (props) => {
  const { groupId, post, likes, userAuth } = props;

  const postId = post.id;

  const dispatch = useDispatch();

  //   // console.log('post--> ', post);
  const likeIds = likes.map((like) => {
    return like.userId;
  });
  //   console.log('likeIds--> ', likeIds);

  const likeUnlikePost = async (e) => {
    e.preventDefault();

    if (likeIds.includes(userAuth.id)) {
      await dispatch(unlikeGroupPost({ groupId, postId }));
    } else {
      await dispatch(likeGroupPost({ groupId, postId }));
    }
  };

  return (
    <>
      <div>Like</div>
      <p>
        <button
          onClick={likeUnlikePost}
          className="p-1 rounded-lg bg-[#cbd5e1] font-mono"
        >
          Like
        </button>
      </p>
    </>
  );
};

export default LikeUnlike;
