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

  const member = useSelector((state) => state.groups.member);

  const { userAuth } = useSelector(selectAuth);

  const memberIds = members.map((mem) => {
    return mem.id;
  });

  const [loading, setLoading] = useState(true);
  // console.log(posts);

  useEffect(() => {
    dispatch(fetchGroupMembers(groupId));
  }, [dispatch, member]);

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
    <div>
      <div>
        {loading ? (
          <div className="bg-white-smoke border rounded-lg shadow-lg">
            <div className="font-rubikmono">Fetching good things...</div>
          </div>
        ) : (
          <div>
            <div>
              <div className="">
                {memberIds.includes(userAuth.id) && (
                  <div>
                    <AddGroupPost groupId={groupId} />
                  </div>
                )}
              </div>
            </div>
            {posts.length ? (
              <div>
                <div className="">
                  <div className="">
                    <div className="flex flex-col gap-5">
                      {posts.map((post) => (
                        <div key={post.id} className="">
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
              </div>
            ) : (
              <div>
                {memberIds.includes(userAuth.id) ? (
                  <div>No posts yet! Be the first to post!</div>
                ) : (
                  <div>No posts yet! Please join to post!</div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostsView;
