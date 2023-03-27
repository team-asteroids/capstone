import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import GroupInfo from './GroupInfo';
import PostsView from './PostsView';
import MemberView from './MemberView';
import EditGroup from './EditGroup';

const SingleGroup = () => {
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
      <div className="bg-white-smoke border rounded-lg shadow-lg text-lg">
        Loading
      </div>
    </>
  );
};

export default SingleGroup;
