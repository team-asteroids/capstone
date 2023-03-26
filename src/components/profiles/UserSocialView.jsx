import React from 'react';
import UserPetProfiles from './UserPetProfiles';

const UserSocialView = (props) => {
  const { user } = props;

  return (
    <div className="font-rubik flex flex-col gap-5">
      <div>
        <h2 className="font-rubikmono">User Social View</h2>
      </div>
      <div className="h-[calc(100vh_-_20rem)] overflow-auto flex flex-col gap-5">
        <div>
          <UserPetProfiles user={user} />
        </div>
        <div>Recent Activity</div>
        <div>Upcoming Events</div>
        <div>Group</div>
      </div>
    </div>
  );
};

export default UserSocialView;
