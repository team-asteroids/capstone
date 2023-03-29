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

  const { user } = props;

  return (
    <div className="font-rubik flex flex-col gap-5">
      <button
        className="text-left text-xs font-semibold hover:text-bold-purple ease-in-out duration-100"
        onClick={goBack}
      >
        BACK
      </button>
      {params['*'] === '' ? (
        <div className="font-rubik flex flex-row">
          <div className="w-4/5 h-[calc(100vh_-_20rem)] overflow-auto flex flex-col pr-10 gap-10">
            <div>
              <UserPetProfiles user={user} />
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="font-rubikmono">Recent Activity</h2>
              <UserEventsProfile user={user} />
              <UserGroupsProfile user={user} />
            </div>
          </div>
          <div className="w-1/5">
            <UserFriendsSidebar user={user} />
          </div>
        </div>
      ) : (
        <EditPetDetails user={user} />
      )}
    </div>
  );
};

export default UserSocialView;
