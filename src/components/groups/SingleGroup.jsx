import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleGroup } from '../../slices/groupsSlice';

import GroupInfo from './GroupInfo';
import PostsView from './PostsView';
import MemberView from './MemberView';
import EditGroup from './EditGroup';

import { selectAuth } from '../../slices/authSlice';
import MustLogIn from '../ui/MustLogIn';

const SingleGroup = () => {
  const dispatch = useDispatch();
  const { groupId } = useParams();
  // const location = useLocation();
  // const url = location.pathname;
  const params = useParams();

  const { userAuth } = useSelector(selectAuth);

  const singleGroup = useSelector((state) => state.groups.singleGroup);

  useEffect(() => {
    if (groupId) {
      dispatch(fetchSingleGroup(groupId));
    }
  }, [dispatch, groupId]);

  // console.log(singleGroup);

  // console.log('location --> ', location);
  // console.log('userAuth --> ', userAuth);
  // console.log('userAuth ID--> ', userAuth.id);

  if (!userAuth || !userAuth.id) {
    return (
      <div>
        <MustLogIn />
      </div>
    );
  } else {
    return (
      <div className="bg-cover bg-top bg-no-repeat bg-[url('img/groups-bg.jpg')] h-full pb-10">
        <div className="ml-20 flex flex-row gap-16 justify-left">
          <div className="max-w-1/5">
            <div>
              <GroupInfo />
            </div>
            <div className="ml-16 pt-5">
              <Link to="/groups">
                <button className="hover:text-bright-white font-semibold">
                  BACK TO BROWSE GROUPS
                </button>
              </Link>
            </div>
          </div>
          <div className="w-4/5 flex flex-col ml-10 pr-10">
            <div className="flex flex-row text-left font-rubikmono mt-16 mb-5 text-2xl gap-10">
              <div>
                <Link to={`/groups/${groupId}/posts`}>
                  <h2 className="hover:text-bright-white">DISCUSSION</h2>
                </Link>
              </div>
              <div>
                <Link to={`/groups/${groupId}/members`}>
                  <h2 className="hover:text-bright-white">MEMBERS</h2>
                </Link>
              </div>
              {singleGroup.creatorId === userAuth.id ? (
                <div>
                  <Link to={`/groups/${groupId}/edit`}>
                    <h2 className="hover:text-bright-white">EDIT</h2>
                  </Link>
                </div>
              ) : null}
            </div>
            <div className="w-4/5">
              {params['*'] === '' || params['*'] === 'posts' ? (
                <PostsView />
              ) : params['*'] === 'members' ? (
                <MemberView />
              ) : (
                <EditGroup singleGroup={singleGroup} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default SingleGroup;
