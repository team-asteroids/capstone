import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGroupPosts, fetchGroupLikes } from '../../slices/groupsSlice';
import PostComment from './PostComment';

const CommentView = (props) => {
  const { post, comments, userAuth } = props;
  const dispatch = useDispatch();
  const { groupId } = useParams();

  //   const posts = useSelector((state) => state.posts.allComments);
  //   const likes = useSelector((state) => state.groups.likes);

  //   useEffect(() => {
  //     dispatch(fetchGroupPosts(groupId));
  //     dispatch(fetchGroupLikes(groupId));
  //   }, [dispatch]);

  return (
    <>
      <div>
        <div className="bg-white-smoke border rounded-lg shadow-lg">
          <div className="p-4">
            <div>
              {comments.map((comment) => (
                <div key={comment.id}>
                  <PostComment key={comment.id} comment={comment} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <div>
          <AddGroupPost groupId={groupId} />
        </div> */}
        <div className="p-4"></div>
      </div>
    </>
  );
};

export default CommentView;
