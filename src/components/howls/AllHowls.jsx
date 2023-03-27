import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllPosts, fetchAllPostLikes } from '../../slices/postsSlice';
import Howl from './Howl';

const AllHowls = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.allPosts);
  const likes = useSelector((state) => state.posts.postLikes);
  //   console.log('posts --> ', posts[0]);

  useEffect(() => {
    const getData = async () => {
      await dispatch(fetchAllPosts());
      await dispatch(fetchAllPostLikes());
    };
    getData();
  }, [dispatch]);

  return (
    <>
      <div>
        <div className="bg-white-smoke border rounded-lg shadow-lg">
          <div className="p-4">
            <div>
              {posts.map((post) => (
                <div key={post.id}>
                  <Howl
                    key={post.id}
                    post={post}
                    likes={likes.filter((like) => like.postId === post.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <div>
          <AddGroupPost groupId={groupId} />
        </div> */}
        <div className="p-4">
          {/* <Link to="/groups">
            <button className="p-1 rounded-lg bg-[#cbd5e1] font-mono">
              Back to Browse Groups
            </button>
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default AllHowls;
