import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchGroupPosts,
  fetchGroupLikes,
  fetchGroupMembers,
} from '../../slices/groupsSlice';
import GroupPost from './GroupPost';
import AddGroupPost from './AddGroupPost';
import { selectAuth } from '../../slices/authSlice';

const PostsView = () => {
  const dispatch = useDispatch();
  const { groupId } = useParams();

  const posts = useSelector((state) => state.groups.posts);
  const likes = useSelector((state) => state.groups.likes);
  const members = useSelector((state) => state.groups.members);

  const { userAuth } = useSelector(selectAuth);

  const memberIds = members.map((mem) => {
    return mem.id;
  });

  const [loading, setLoading] = useState(true);
  console.log(members);

  useEffect(() => {
    dispatch(fetchGroupMembers(groupId));
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchGroupPosts(groupId));
      await dispatch(fetchGroupLikes(groupId));
      // await dispatch(fetchGroupMembers(groupId));
    };
    fetchData();
    setLoading(false);
  }, [dispatch]);

  return (
    <>
      <div>
        {loading ? (
          <div className="bg-white-smoke border rounded-lg shadow-lg">
            <div className="font-rubikmono">Fetching good things...</div>
          </div>
        ) : (
          <>
            <div className="bg-white-smoke border rounded-lg shadow-lg">
              <div className="p-4">
                <div>
                  {posts.map((post) => (
                    <div key={post.id}>
                      <GroupPost
                        key={post.id}
                        post={post}
                        user={post.user}
                        members={members}
                        memberIds={memberIds}
                        userAuth={userAuth}
                        likes={likes.filter(
                          (like) => like.groupPostId === post.id
                        )}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {memberIds.includes(userAuth.id) && (
              <div>
                <AddGroupPost groupId={groupId} />
              </div>
            )}

            <div className="p-4">
              <Link to="/groups">
                <button className="p-1 rounded-lg bg-[#cbd5e1] font-mono">
                  Back to Browse Groups
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default PostsView;
