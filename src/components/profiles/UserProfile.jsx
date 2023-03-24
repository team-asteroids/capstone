import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Routes, Route, useParams } from 'react-router-dom';
import { selectAuth } from '../../slices/authSlice';
import defaultImg from '../../img/default-dog.jpg';
import {} from '../index';

function UserProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useParams();

  useEffect(() => {
    if (location['*'] === 'sitter') navigate('/account');
  }, []);

  const { userAuth } = useSelector(selectAuth);

  if (!userAuth.firstName)
    return <div className="font-rubikmono">Fetching good things...</div>;
  return (
    <div className="bg-cover bg-no-repeat bg-[url('img/profile-bg.jpg')] h-[calc(100vh_-_5rem)]">
      <div className="flex flex-row pt-20 mb-16 gap-10 mx-20 px-20">
        <div className="w-1/4 flex flex-col gap-5">
          <div id="userBio" className="w-full flex flex-col gap-5">
            <div className="flex flex-col gap-5">
              <img
                className="h-48 w-48 rounded-full drop-shadow-md"
                src={defaultImg}
                alt="alt"
              ></img>
              <div className="font-rubikmono">{userAuth.fullName}</div>
            </div>
          </div>
        </div>
        <div className="w-3/4 font-rubikmono overflow-auto flex flex-col gap-5">
          <Routes></Routes>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
