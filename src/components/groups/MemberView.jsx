import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGroupPosts } from '../../slices/groupDetailsSlice';
import GroupPost from './GroupPost';

const MemberView = () => {
  const dispatch = useDispatch();
  const { groupId } = useParams();

  const posts = useSelector((state) => state.groupDetails.posts);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchGroupPosts(groupId));
      setLoading(false);
    };
    fetchData();
  }, [dispatch, groupId]);

  return (
    <>
      {loading ? (
        <div className="bg-white-smoke border rounded-lg shadow-lg text-lg">
          Loading
        </div>
      ) : (
        <div>
          <div className="bg-white-smoke border rounded-lg shadow-lg">
            <div className="p-4">
              <div>
                {posts.map((post) => (
                  <div key={post.post.id}>
                    <GroupPost
                      key={post.post.id}
                      post={post.post}
                      likes={post.likes}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="p-4">
            <Link to="/groups">
              <button className="p-1 rounded-lg bg-[#cbd5e1] font-mono">
                Back to Browse Groups
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default MemberView;