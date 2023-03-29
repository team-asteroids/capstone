import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../slices/authSlice';
import { fetchGroupPostLikes, deleteGroupPost } from '../../slices/groupsSlice';
import LikeUnlikeHowl from './LikeUnlikeHowl';

const PostComment = (props) => {
  const { comment } = props;
  //   const postId = post.id;

  // const { groupId } = useParams();
  // const dispatch = useDispatch();

  console.log(comment);

  // const likes = useSelector((state) => state.groups.likes);
  const { userAuth } = useSelector(selectAuth);

  const date = comment.createdAt;
  const dateData = new Date(date);
  const formattedDate = dateData.toDateString();
  const formattedTime = dateData.toLocaleTimeString('en-US');

  // useEffect(() => {
  //   dispatch(fetchPostCommentLikes({ groupId, postId }));
  // }, [dispatch]);

  // console.log('post--> ', post);

  // console.log('likes--> ', likes);

  // const deleteHandler = async (e) => {
  //   e.preventDefault();
  //   const postId = post.id;
  //   // await dispatch(deletePostComment({ groupId, postId }));
  // };

  return (
    <div className="bg-white-smoke border rounded-lg shadow-lg font-rubik">
      <div className="p-2">
        <div>
          <p>Content: {comment.content}</p>
          <p>By: {comment.user.fullName}</p>
          <p>
            Posted at: {formattedTime} on {formattedDate}
          </p>
          {/* <p>Likes: {likes.length}</p> */}
        </div>
        {/* <div>
          <LikeUnlike
            key={post.id}
            groupId={groupId}
            post={post}
            likes={likes}
            userAuth={userAuth}
          />
        </div> */}
        {/* {userAuth.id === post.userId && (
          <p>
            <button
              onClick={deleteHandler}
              className="p-1 rounded-lg bg-[#cbd5e1] font-mono"
            >
              X
            </button>
          </p>
        )} */}
      </div>
    </div>
  );
};

export default PostComment;
