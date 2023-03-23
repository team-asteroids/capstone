import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { logOut, selectAuth } from '../../slices/authSlice';
import defaultImg from '../../img/default-dog.jpg';

function UserAccount() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userAuth } = useSelector(selectAuth);

  // populate user state

  const sidebarFontClass =
    'font-regular duration-200 hover:tracking-wide hover:font-bold hover:text-bold-purple';

  const attemptLogOut = async () => {
    await dispatch(logOut());
    navigate('/');
  };

  if (!userAuth.firstName)
    return <div className="font-rubikmono">Fetching good things...</div>;

  return (
    <div className="h-[calc(100vh_-_5rem)]">
      <h2 className="font-rubikmono">(user account)</h2>
      <div className="flex flex-row pt-16 mb-16 gap-10 mx-20">
        <div className="w-1/3 flex flex-col gap-5">
          <div id="userBio" className="w-full flex flex-col gap-5">
            <img
              className="h-48 w-48 rounded-full"
              src={defaultImg}
              alt="alt"
            ></img>
            <div className="font-rubikmono">{userAuth.fullName}</div>
            <div>
              <Link to="/account" className={sidebarFontClass}>
                Overview
              </Link>
            </div>
            <div>
              <Link to="/account/editprofile" className={sidebarFontClass}>
                Edit Profile
              </Link>
            </div>
            <div>
              <Link to="/account/pets" className={sidebarFontClass}>
                Pets
              </Link>
            </div>
            <div>
              <Link to="/account/bookings" className={sidebarFontClass}>
                Bookings
              </Link>
            </div>
            <div>
              <Link to="/account/access" className={sidebarFontClass}>
                Access
              </Link>
            </div>
            <div className="align-baseline">
              <button
                className="font-rubikmono text-left"
                onClick={attemptLogOut}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
        <div className="w-2/3 font-rubikmono">
          <h2>MAIN SECTION</h2>
        </div>
      </div>
    </div>
  );
}

export default UserAccount;
