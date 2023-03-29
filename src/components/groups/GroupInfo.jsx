import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchSingleGroup,
  deleteSingleGroup,
  addGroupMember,
  deleteGroupMember,
  fetchGroupMembers,
} from '../../slices/groupsSlice';
import GroupNav from './GroupNav';

import { selectAuth } from '../../slices/authSlice';

const GroupInfo = () => {
  const dispatch = useDispatch();
  const { groupId } = useParams();

  const { userAuth, token } = useSelector(selectAuth);
  const memberId = userAuth.id;

  const singleGroup = useSelector((state) => state.groups.singleGroup);

  const members = useSelector((state) => state.groups.members);

  useEffect(() => {
    dispatch(fetchGroupMembers(groupId));
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchSingleGroup(groupId));
    };
    fetchData();
  }, [dispatch]);

  const joinGroup = async (e) => {
    e.preventDefault();
    if (token) {
      await dispatch(addGroupMember(groupId));
    } else {
      console.log('no token in component');
    }
  };

  const leaveGroup = async (e) => {
    e.preventDefault();
    await dispatch(deleteGroupMember({ groupId, memberId }));
  };

  const deleteGroup = async (e) => {
    e.preventDefault();
    await dispatch(deleteSingleGroup(groupId));
  };

  return (
    <>
      {singleGroup && singleGroup.name ? (
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
                {userAuth.role === 'admin' ||
                  (userAuth.id === singleGroup.creatorId && (
                    <div>
                      <button
                        onClick={deleteGroup}
                        className="p-1 rounded-lg bg-[#cbd5e1] font-mono"
                      >
                        Delete group
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div>
            <GroupNav
              singleGroup={singleGroup}
              members={members}
              userAuth={userAuth}
            />
          </div>
        </div>
      ) : (
        <div className="bg-white-smoke border rounded-lg shadow-lg text-lg">
          Loading
        </div>
      )}
    </>
  );
};

export default GroupInfo;
