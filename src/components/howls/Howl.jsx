import React, { useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../slices/authSlice';
// import { fetchGroupPostLikes, deleteGroupPost } from '../../slices/groupsSlice';
import LikeUnlikeHowl from './LikeUnlikeHowl';

const Howl = (props) => {
  const { post, likes } = props;
  const postId = post.id;
  const content = post.content;
  const comments = post.post_comments;
  const author = post.user.fullName;

  //   console.log('likes -->', likes);

  const dispatch = useDispatch();

  const { userAuth } = useSelector(selectAuth);

  const date = post.createdAt;
  const dateData = new Date(date);
  const formattedDate = dateData.toDateString();
  const formattedTime = dateData.toLocaleTimeString('en-US');

  //   const deletePost = async (e) => {
  //     e.preventDefault();
  //     const postId = post.id;
  //     await dispatch(deleteHowl({ groupId, postId }));
  //   };

  return (
    <div className="bg-white-smoke border rounded-lg shadow-lg font-rubik">
      <div className="p-2">
        <div>
          <p>Content: {content}</p>
          <img
            className="w-12 rounded-full"
            src={require('../../img/default-dog.jpg')}
            alt="alt"
          />
          <p>Posted by: {author}</p>
          <p>
            Posted at: {formattedTime} on {formattedDate}
          </p>
          <p>Comments: {comments.length}</p>
          <p>Likes: {likes.length}</p>
        </div>
        <div>
          <LikeUnlikeHowl
            key={post.id}
            post={post}
            likes={likes}
            userAuth={userAuth}
          />
        </div>
        {/* {userAuth.id === post.userId && (
          <p>
            <button
              onClick={deletePost}
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

export default Howl;
