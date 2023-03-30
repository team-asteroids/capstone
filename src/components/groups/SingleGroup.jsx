import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useParams, Link } from 'react-router-dom';

import GroupInfo from './GroupInfo';
import PostsView from './PostsView';
import MemberView from './MemberView';
import EditGroup from './EditGroup';

const SingleGroup = () => {
  const { groupId } = useParams();
  const location = useLocation();
  const url = location.pathname;

  // console.log('location --> ', location);

  return (
    <>
      <div>
        <div className="bg-white-smoke border rounded-lg shadow-lg font-mono">
          <div>
            <GroupInfo />
          </div>
        </div>
        <Routes>
          <Route path="/posts" element={<PostsView />} />
          <Route path="/members" element={<MemberView />} />
          <Route path="/edit" element={<EditGroup />} />
        </Routes>
      </div>
      {url === `/groups/${groupId}` && (
        <div className="bg-white-smoke border rounded-lg shadow-lg text-lg">
          <PostsView />
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
  );
};

export default SingleGroup;
