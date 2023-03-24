import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link, Routes, Route, useParams } from 'react-router-dom';
import { logOut, selectAuth } from '../../slices/authSlice';
import defaultImg from '../../img/default-dog.jpg';
import {
  UserBookings,
  UserAccountSidebar,
  SitterAccountSidebar,
} from '../index';

function UserAccount() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useParams();

  const [sitterToggle, setSitterToggle] = useState(false);

  useEffect(() => {
    console.log(location);
    if (location['*'] === 'sitter') navigate('/account');
  }, []);

  const { userAuth } = useSelector(selectAuth);

  const toggleClass =
    "checked w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pale-blue  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all  peer-checked:bg-bold-pink";

  const attemptLogOut = async () => {
    await dispatch(logOut());
    navigate('/');
  };

  const toggleSitter = () => {
    setSitterToggle(!sitterToggle);
    if (!sitterToggle) navigate('/account/sitter');
    else if (sitterToggle) {
      navigate('/account');
    }
  };

  if (!userAuth.firstName)
    return <div className="font-rubikmono">Fetching good things...</div>;

  return (
    <div className="bg-cover bg-no-repeat bg-[url('img/profile-bg.jpg')] h-[calc(100vh_-_5rem)]">
      <div className="flex flex-row pt-20 mb-16 gap-10 mx-20">
        <div className="w-1/3 flex flex-col gap-5">
          <div id="userBio" className="w-full flex flex-col gap-5">
            <div className="flex flex-col gap-5">
              <img
                className="h-48 w-48 rounded-full drop-shadow-md"
                src={defaultImg}
                alt="alt"
              ></img>
              <div className="font-rubikmono">{userAuth.fullName}</div>
              {userAuth.role === 'sitter' ? (
                <div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      onClick={toggleSitter}
                    />
                    <div className={toggleClass}></div>
                    <span className="ml-3 text-sm font-medium text-gray-900">
                      Sitter Profile
                    </span>
                  </label>
                </div>
              ) : (
                <div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" disabled />
                    <div className={toggleClass}></div>
                    <span className="ml-3 text-sm font-medium text-gray-400">
                      Sitter Profile
                    </span>
                  </label>
                </div>
              )}
            </div>
            {!sitterToggle ? <UserAccountSidebar /> : <SitterAccountSidebar />}

            <div className="align-baseline">
              <button
                className="font-rubikmono text-left"
                onClick={() => {
                  attemptLogOut();
                }}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
        <div className="w-2/3 font-rubikmono">
          <h2>MAIN SECTION</h2>
          <Routes>
            <Route path="/bookings" element={<UserBookings />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default UserAccount;
