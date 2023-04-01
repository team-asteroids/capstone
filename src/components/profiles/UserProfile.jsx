import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Routes, Route, useParams, Link } from 'react-router-dom';
// import { selectAuth } from '../../slices/authSlice';
import defaultImg from '../../img/default-dog.jpg';
import { fetchSingleSitter } from '../../slices/sittersSlice';
import { fetchSingleUser, selectUser } from '../../slices/usersSlice';
import { RatingsAndReviews, SitterProfile, UserSocialView } from '../index';
import { selectAuth } from '../../slices/authSlice';

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useParams();

  const { singleUser } = useSelector(selectUser);
  const { userAuth } = useSelector(selectAuth);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleUser(id));
    }
  }, [id]);

  const toggleClass =
    "checked w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pale-blue  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all  peer-checked:bg-bold-pink";

  const toggleSitter = () => {
    if (location['*'].includes('sitter')) {
      navigate(`/profile/${id}`);
    } else navigate(`/profile/${id}/sitter/${singleUser.sitter.id}`);
  };

  if (!singleUser.firstName)
    return <div className="font-rubikmono">Fetching good things...</div>;

  return (
    <div className="bg-cover bg-no-repeat bg-[url('img/profile-bg.jpg')] h-[calc(100vh_-_5rem)]">
      <div className="flex flex-row justify-center pt-20 mb-16 mx-20 px-20">
        <div className="min-w-1/5 flex flex-col gap-5 mr-20">
          <div id="userBio" className="min-w-max flex flex-col gap-5">
            <div className="flex flex-col gap-5 min-w-48">
              <img
                className="h-48 w-48 rounded-full drop-shadow-md"
                src={defaultImg}
                alt="alt"
              ></img>
              <div className="font-rubikmono">{singleUser.fullName}</div>
              {singleUser.role === 'sitter' ? (
                <div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      onClick={toggleSitter}
                      checked={location['*'].includes('sitter') ? true : false}
                    />
                    <div className={toggleClass}></div>
                    <span className="ml-3 text-sm font-medium text-gray-900">
                      Sitter Profile
                    </span>
                  </label>
                </div>
              ) : (
                <div className="group" type="tooltip">
                  <div>
                    <label className="relative inline-flex items-center">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        disabled
                      />
                      <div className={toggleClass}></div>
                      <span className="ml-3 text-sm font-medium text-gray-400">
                        Sitter Profile
                      </span>
                    </label>
                  </div>
                  <span className="group-hover:opacity-100 transition-opacity position absolute ml-10 bg-pale-blue p-1 text-sm text-bright-white rounded px-2 opacity-0">
                    Not a sitter!
                  </span>
                </div>
              )}
            </div>
          </div>
          <div>
            <div>
              <p className="font-rubikmono mb-2">Neighborhood</p>
              <p>{singleUser.access.zip}</p>
            </div>
          </div>
          <div>
            <p className="font-rubikmono mb-2">Can Foster</p>
            <p>{singleUser.canFoster ? 'yes!' : 'not right now'}</p>
          </div>
          <div className="w-1/4">
            <Link to={`/chat/`}>
              <button className="bg-bold-purple font-bold ease-in duration-300 hover:bg-pale-purple px-5 py-2.5 text-white rounded-lg">
                MESSAGE
              </button>
            </Link>
          </div>
        </div>
        <div className="w-4/5 font-rubikmono overflow-auto gap-5">
          <Routes>
            <Route path="/*" element={<UserSocialView user={singleUser} />} />
            <Route
              path="/sitter/*"
              element={<SitterProfile sitter={singleUser.sitter} />}
            />
            <Route
              path="/sitter/:sitterId/reviews/*"
              element={
                <RatingsAndReviews user={userAuth} sitter={singleUser.sitter} />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
