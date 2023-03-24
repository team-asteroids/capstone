import React from 'react';

function UserProfile() {
  return (
    <div className="font-rubik flex flex-col gap-5">
      <div>
        <h2 className="font-rubikmono">User Profile Overview</h2>
      </div>
      <div className="h-[calc(100vh_-_20rem)] overflow-auto flex flex-col gap-5">
        <div>User Details</div>
        <div>Pet Profiles</div>
        <div>Social</div>
      </div>
    </div>
  );
}

export default UserProfile;
