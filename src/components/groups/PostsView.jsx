import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGroupPosts } from '../../slices/groupsSlice';
import GroupPost from './GroupPost';
import AddGroupPost from './AddGroupPost';

const PostsView = () => {
  const dispatch = useDispatch();
  const { groupId } = useParams();

  const posts = useSelector((state) => state.groups.posts);
  console.log(posts);

  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await dispatch(fetchGroupPosts(groupId));
  //     setLoading(false);
  //   };
  //   setLoading(true);
  //   fetchData();
  // }, [dispatch, groupId]);

  useEffect(() => {
    dispatch(fetchGroupPosts(groupId));
  }, [dispatch]);

  // console.log('posts -->', posts);

  return (
    <>
      {/* {loading ? ( */}
      <div className="bg-white-smoke border rounded-lg shadow-lg text-lg">
        Loading
      </div>
      {/* ) : ( */}
      <div>
        <div className="bg-white-smoke border rounded-lg shadow-lg">
          <div className="p-4">
            <div>
              {posts.map((post) => (
                <div key={post.id}>
                  <GroupPost
                    key={post.id}
                    post={post}
                    // creator={post.user}
                    // likes={post.likes}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <AddGroupPost groupId={groupId} />
        </div>
        <div className="p-4">
          <Link to="/groups">
            <button className="p-1 rounded-lg bg-[#cbd5e1] font-mono">
              Back to Browse Groups
            </button>
          </Link>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default PostsView;
