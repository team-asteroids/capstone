import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Routes, Route, useParams } from 'react-router-dom';
import { selectAuth } from '../../slices/authSlice';
import defaultImg from '../../img/default-dog.jpg';
import { fetchSingleUser, selectUser } from '../../slices/usersSlice';

function UserProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useParams();

  const [sitterToggle, setSitterToggle] = useState(false);

  const { userAuth } = useSelector(selectAuth);
  const { singleUser } = useSelector(selectUser);

  const { id } = location;

  // console.log('singleUser:', singleUser);

  useEffect(() => {
    dispatch(fetchSingleUser(id));
  }, [userAuth]);

  const toggleClass =
    "checked w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pale-blue  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all  peer-checked:bg-bold-pink";

  const toggleSitter = () => {
    setSitterToggle(!sitterToggle);
    if (!sitterToggle) navigate(`/profile/${id}/sitter`);
    else if (sitterToggle) {
      navigate(`/profile/${id}`);
    }
  };

  if (!userAuth.firstName)
    return <div className="font-rubikmono">Fetching good things...</div>;

  return (
    <div className="bg-cover bg-no-repeat bg-[url('img/profile-bg.jpg')] h-[calc(100vh_-_5rem)]">
      <div className="flex flex-row pt-20 mb-16 gap-10 mx-20 px-20">
        <div className="w-1/5 flex flex-col gap-5">
          <div id="userBio" className="w-full flex flex-col gap-5">
            <div className="flex flex-col">
              <img
                className="h-48 w-48 rounded-full drop-shadow-md mb-5"
                src={defaultImg}
                alt="alt"
              ></img>
              <div className="font-rubikmono mb-2">
                <p>{userAuth.fullName}</p>
              </div>
              <div className="font-rubikmono">
                <p>{singleUser.access.zip}</p>
              </div>
            </div>
          </div>
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
          <div>OTHER STUFF</div>
        </div>
      </div>
      <div className="w-4/5 font-rubikmono overflow-auto flex flex-col gap-5">
        <Routes></Routes>
      </div>
    </div>
  );
}

export default UserProfile;
