import React from 'react';

const UserFriendsSidebar = (props) => {
  const { user } = props;
  return (
    <div className="min-w-max">
      <h2 className="font-rubikmono">Friends</h2>
      <div className="flex flex-col">
        <ul>
          <li>Friend 1</li>
          <li>Friend 2</li>
          <li>Friend 3</li>
          <li>Friend 4</li>
        </ul>
      </div>
    </div>
  );
};

export default UserFriendsSidebar;
