import React from 'react';
import {
  UserPetProfiles,
  UserEventsProfile,
  UserGroupsProfile,
  UserFriendsSidebar,
} from '../../index';

const UserSocialView = (props) => {
  const { user } = props;

  return (
    <div className="font-rubik flex flex-col gap-5">
      <div>
        <h2 className="font-rubikmono">USER PROFILE</h2>
      </div>
      <div className="font-rubik flex flex-row">
        <div className="w-4/5 h-[calc(100vh_-_20rem)] overflow-auto flex flex-col gap-5">
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
    </div>
  );
};

export default UserSocialView;
