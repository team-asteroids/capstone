import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import {
  UserPetProfiles,
  UserEventsProfile,
  UserGroupsProfile,
  EditPetDetails,
  UserFriendsSidebar,
} from '../../index';

const UserSocialView = (props) => {
  const params = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const { user, userAuth } = props;

  return (
    <div className="font-rubik flex flex-col gap-5">
      <button
        className="text-left max-w-fit text-xs font-semibold hover:text-bold-purple ease-in-out duration-100"
        onClick={goBack}
      >
        BACK
      </button>
      {params['*'] === '' ? (
        <div className="font-rubik flex flex-row">
          <div className="w-full h-[calc(100vh_-_20rem)] overflow-auto flex flex-col pr-10 gap-10">
            <div>
              <UserPetProfiles user={user} userAuth={userAuth} />
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="font-rubikmono">Recent Activity</h2>
              <UserEventsProfile user={user} userAuth={userAuth} />
              <UserGroupsProfile user={user} userAuth={userAuth} />
            </div>
          </div>
          {/* <div className="w-1/5">
            <UserFriendsSidebar user={user} />
          </div> */}
        </div>
      ) : (
        <EditPetDetails user={user} userAuth={userAuth} />
      )}
    </div>
  );
};

export default UserSocialView;
