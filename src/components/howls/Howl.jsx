import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../slices/authSlice';
import { deletePost } from '../../slices/postsSlice';
import LikeUnlikeHowl from './LikeUnlikeHowl';
import AddComment from './AddComment';
import CommentView from './CommentView';

const Howl = (props) => {
  const { post, likes, userAuth } = props;
  const content = post.content;
  const comments = post.post_comments;
  const author = post.user.fullName;

  //   console.log('likes -->', likes);

  const [commentView, setCommentView] = useState(false);

  const dispatch = useDispatch();

  // const { userAuth } = useSelector(selectAuth);

  const date = post.createdAt;
  const dateData = new Date(date);
  const formattedDate = dateData.toDateString();
  const formattedTime = dateData.toLocaleTimeString('en-US');

  const deleteHandler = async (e) => {
    e.preventDefault();
    const postId = post.id;
    console.log('postId -->', postId);
    await dispatch(deletePost(postId));
  };

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
        <br></br>
        {userAuth && (
          <>
            <div>
              <LikeUnlikeHowl
                key={post.id}
                post={post}
                likes={likes}
                userAuth={userAuth}
              />
            </div>
            <br></br>
            <div>
              <button
                onClick={() => setCommentView(true)}
                className="p-1 rounded-lg bg-[#cbd5e1] font-mono"
              >
                View Comments
              </button>
            </div>
          </>
        )}

        {commentView && (
          <>
            <div>
              <CommentView
                post={post}
                comments={comments}
                userAuth={userAuth}
              />
            </div>
            <div>
              <AddComment post={post} userAuth={userAuth} />
            </div>
          </>
        )}

        {userAuth &&
          (userAuth.id === post.creatorId || userAuth.role === 'admin') && (
            <p>
              <button
                onClick={deleteHandler}
                className="p-1 rounded-lg bg-[#cbd5e1] font-mono"
              >
                X
              </button>
            </p>
          )}
      </div>
    </div>
  );
};

export default Howl;
