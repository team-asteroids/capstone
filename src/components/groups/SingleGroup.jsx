import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleGroup } from '../../slices/groupsSlice';
import {
  fetchGroupPosts,
  addGroupMember,
  deleteGroupMember,
} from '../../slices/groupDetailsSlice';
import GroupNav from './GroupNav';
import PostsView from './PostsView';
import MemberView from './MemberView';
import { selectAuth } from '../../slices/authSlice';

const SingleGroup = () => {
  const dispatch = useDispatch();
  const { groupId } = useParams();

  const { userAuth } = useSelector(selectAuth);
  const memberId = userAuth.id;

  // console.log('userAuth in single group -->', userAuth);

  const group = useSelector((state) => state.groups.singleGroup);
  const singleGroup = group.singleGroup;
  const members = group.members;

  const posts = useSelector((state) => state.groupDetails.posts);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchSingleGroup(groupId));
      await dispatch(fetchGroupPosts(groupId));
      setLoading(false);
    };
    fetchData();
  }, [dispatch, groupId]);

  const joinGroup = async (e) => {
    e.preventDefault();
    await dispatch(addGroupMember({ groupId, memberId }));
  };

  const leaveGroup = async (e) => {
    e.preventDefault();
    await dispatch(deleteGroupMember({ groupId, memberId }));
  };
  return (
    <>
      {loading ? (
        <div className="bg-white-smoke border rounded-lg shadow-lg text-lg">
          Loading
        </div>
      ) : (
        <div>
          <div className="bg-white-smoke border rounded-lg shadow-lg font-mono">
            <div className="p-4 flex flex-row justify-between">
              <div className="basis-1/2 ">
                <img
                  src={require('../../img/groups/party-pups.jpg')}
                  alt="Group"
                  className="border rounded-lg max-w-sm"
                />
              </div>
              <div className="basis-1/2 p-6 flex flex-col border rounded-lg text-lg justify-evenly">
                <div>{`${singleGroup.name}`}</div>
                <div>Topic: {`${singleGroup.topic}`}</div>
                <div>{`${members.length}`} members</div>
                <div>
                  <button
                    onClick={joinGroup}
                    className="p-1 rounded-lg bg-[#cbd5e1] font-mono"
                  >
                    Join group
                  </button>
                </div>
                <div>
                  <button
                    onClick={leaveGroup}
                    className="p-1 rounded-lg bg-[#cbd5e1] font-mono"
                  >
                    Leave group
                  </button>
                </div>
              </div>
            </div>
            <div>
              <GroupNav
                singleGroup={singleGroup}
                members={members}
                posts={posts}
              />
            </div>
          </div>
          <Routes>
            <Route path="/posts" element={<PostsView />} />
            <Route path="/members" element={<MemberView />} />
          </Routes>
        </div>
      )}
    </>
  );
};

export default SingleGroup;
