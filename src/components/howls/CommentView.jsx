import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCommentLikes } from '../../slices/postsSlice';
import PostComment from './PostComment';
// import { Divider } from '@mui/material';

const CommentView = (props) => {
  const { post, comments, userAuth } = props;
  const dispatch = useDispatch();
  const { groupId } = useParams();

  //   const posts = useSelector((state) => state.posts.allComments);
  const likes = useSelector((state) => state.posts.commentLikes);
  // console.log('likes-->', likes);

  useEffect(() => {
    // dispatch(fetchGroupPosts(groupId));
    const fetchData = async () => {
      await dispatch(fetchAllCommentLikes());
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="rounded-lg pl-10 py-5">
      <div className="flex flex-col gap-5">
        {comments.map((comment) => (
          <div key={comment.id}>
            <PostComment
              key={comment.id}
              comment={comment}
              likes={likes.filter((like) => like.postCommentId === comment.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentView;

/* <div>
  <AddGroupPost groupId={groupId} />
</div> */
// <div className="p-4"></div>
