import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut, selectAuth } from '../../slices/authSlice';

function UserProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userAuth } = useSelector(selectAuth);

  // populate user state

  const attemptLogOut = async () => {
    await dispatch(logOut());
    navigate('/');
  };

  if (!userAuth.firstName)
    return <div className="font-rubikmono">Fetching good things...</div>;

  return (
    <div className=" h-[calc(100vh_-_5rem)]">
      <h2 className="font-rubikmono">(user profile)</h2>
      <div className="flex flex-row pt-16 mb-16 gap-10 mx-20">
        <div className="w-1/3 flex flex-col gap-5">
          <div id="userBio" className="w-full flex flex-col gap-5">
            <img
              className="h-48 w-48 rounded-full"
              src={userAuth.imageSrc}
              alt="alt"
            ></img>
            <div className="font-rubikmono">{userAuth.fullName}</div>
            <div>location (neighborhood?)</div>
            <div>bio</div>
          </div>
        </div>
        <div className="w-2/3 font-rubikmono">
          <h2>MAIN SECTION</h2>
        </div>
      </div>
      <button className="font-rubikmono" onClick={attemptLogOut}>
        Log Out
      </button>
    </div>
  );
}

export default UserProfile;
