import React from 'react';

function SitterProfile() {
  return (
    <div className="font-rubik flex flex-col gap-5">
      <div>
        <h2 className="font-rubikmono">Sitter Profile</h2>
      </div>
      <div className="h-[calc(100vh_-_20rem)] overflow-auto flex flex-col gap-5">
        <div>Sitter Bio</div>
        <div>Availability</div>
        <div>Ratings & Reviews</div>
      </div>
    </div>
  );
}

export default SitterProfile;
