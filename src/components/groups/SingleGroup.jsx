import React from 'react';
import { Routes, Route, useLocation, useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import GroupInfo from './GroupInfo';
import PostsView from './PostsView';
import MemberView from './MemberView';
import EditGroup from './EditGroup';

import { selectAuth } from '../../slices/authSlice';
import MustLogIn from '../ui/MustLogIn';

const SingleGroup = () => {
  const { groupId } = useParams();
  const location = useLocation();
  const url = location.pathname;
  const params = useParams();

  console.log(params);

  const { userAuth } = useSelector(selectAuth);

  // console.log('location --> ', location);
  console.log('userAuth --> ', userAuth);
  console.log('userAuth ID--> ', userAuth.id);

  console.log(groupId);

  if (!userAuth || !userAuth.id) {
    return (
      <div>
        <MustLogIn />
      </div>
    );
  } else {
    return (
      <div className="bg-cover bg-top bg-no-repeat bg-[url('img/groups-bg.jpg')] h-[calc(100vh_-_5rem)]">
        <div className="flex flex-row gap-16">
          <div className="max-w-1/5">
            <div>
              <GroupInfo />
            </div>
            <div>
              <Link to="/groups">
                <button className="">Back to Browse Groups</button>
              </Link>
            </div>
          </div>
          <div className="w-1/2 flex flex-col pr-10">
            <div className="flex flex-row m-auto text-center font-rubikmono mt-16 mb-5 text-2xl gap-20">
              <div>
                <Link to={`/groups/${groupId}/posts`}>
                  <h2>DISCUSSION</h2>
                </Link>
              </div>
              <div>
                <Link to={`/groups/${groupId}/members`}>
                  <h2>MEMBERS</h2>
                </Link>
              </div>
            </div>
            <div>
              {params['*'] === '' || params['*'] === 'posts' ? (
                <PostsView />
              ) : params['*'] === 'members' ? (
                <MemberView />
              ) : (
                <EditGroup />
              )}
              {/* <Routes>
                <Route path="/posts" element={<PostsView />} />
                <Route path="/members" element={<MemberView />} />
                <Route path="/edit" element={<EditGroup />} />
              </Routes> */}
            </div>
          </div>
        </div>

        {/* <div>
          {url === `/groups/${groupId}` && (
            <div className="bg-white-smoke border rounded-lg shadow-lg text-lg">
              <PostsView />
            </div>
          )}
          <div className="p-4">
            <Link to="/groups">
              <button className={buttonClass}>Back to Browse Groups</button>
            </Link>
          </div>
        </div> */}
      </div>
    );
  }
};

export default SingleGroup;
