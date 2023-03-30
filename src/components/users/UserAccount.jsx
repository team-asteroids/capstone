import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link, Routes, Route, useParams } from 'react-router-dom';
import { logOut, selectAuth } from '../../slices/authSlice';
import {
  selectSitters,
  resetSitterStatus,
  fetchSingleSitter,
} from '../../slices/sittersSlice';
import {
  resetUserStatus,
  selectUser,
  fetchSingleUser,
} from '../../slices/usersSlice';
import defaultImg from '../../img/default-dog.jpg';
import {
  UserBookings,
  UserAccountSidebar,
  SitterAccountSidebar,
  EditSitterProfile,
  EditUserProfile,
  EditUserPets,
  UserOverview,
  EditSitterPetPrefs,
  SitterOverview,
  SitterBookings,
  EditUserAccess,
  UserPetDetails,
  EditPetDetails,
  AddNewPet,
  SitterClients,
  SitterOnboarding,
} from '../index';
import BookingDetailsCard from './sitters/BookingDetailsCard';

function UserAccount() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useParams();
  const { id } = useParams();

  const [sitterToggle, setSitterToggle] = useState(false);

  useEffect(() => {
    if (location['*'] === 'sitter') navigate('/account');
  }, []);

  const { userAuth } = useSelector(selectAuth);
  const { singleUser } = useSelector(selectUser);
  const { singleSitter } = useSelector(selectSitters);

  useEffect(() => {
    if (userAuth && userAuth.id) {
      const id = userAuth.id;
      dispatch(fetchSingleUser(id));
    }
    return () => {
      dispatch(resetUserStatus());
    };
  }, [userAuth]);

  useEffect(() => {
    if (singleUser && singleUser.sitter) {
      const id = singleUser.sitter.id;
      dispatch(fetchSingleSitter(id));
    }
    return () => {
      dispatch(resetSitterStatus());
    };
  }, [singleUser.id]);

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
      <div className="flex flex-row justify-center pt-20 mb-16 mx-20 px-20">
        <div className="min-w-1/5 flex flex-col gap-5  mr-20">
          <div id="userBio" className="min-w-max flex flex-col gap-5">
            <div className="flex flex-col gap-5 min-w-48">
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
              ) : userAuth.id === singleUser.id ? (
                <div className="group" type="tooltip">
                  <div>
                    <label className="relative inline-flex items-center">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        disabled
                      />
                      <div className={toggleClass}></div>
                      <Link to="/onboarding">
                        <button className="bg-bold-purple font-bold ease-in duration-300 hover:bg-pale-purple px-2 py-1.5 text-white rounded-lg">
                          Become a Sitter
                        </button>
                      </Link>
                    </label>
                  </div>
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
        <div className="w-4/5 font-rubikmono overflow-auto gap-5">
          <Routes>
            <Route path="/" element={<UserOverview />}></Route>
            <Route path="/editprofile" element={<EditUserProfile />}></Route>
            <Route path="/bookings" element={<UserBookings />}></Route>
            <Route path="/pets" element={<EditUserPets />}></Route>
            <Route path="/access" element={<EditUserAccess />}></Route>
            <Route
              path="/pets/:petId/*"
              element={<EditPetDetails user={userAuth} />}
            />
            <Route path="/addpet" element={<AddNewPet user={userAuth} />} />

            {/* SITTER ROUTES */}
            <Route
              path="/sitter"
              element={<SitterOverview sitter={singleSitter} />}
            ></Route>
            <Route
              path="/sitter/editprofile"
              element={<EditSitterProfile sitter={singleSitter} />}
            ></Route>
            <Route
              path="/sitter/updatepetprefs"
              element={<EditSitterPetPrefs sitter={singleSitter} />}
            ></Route>
            <Route
              path="/sitter/bookings"
              element={<SitterBookings sitter={singleSitter} />}
            ></Route>
            <Route
              path="/sitter/bookings/:bookingId"
              element={<BookingDetailsCard sitter={singleSitter} />}
            />
            <Route
              path="/sitter/clients"
              element={<SitterClients sitter={singleSitter} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default UserAccount;
