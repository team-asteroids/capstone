import React from 'react';

function EditSitterProfile() {
  return (
    <div className="font-rubik flex flex-col gap-5">
      <div>
        <h2 className="font-rubikmono">Edit Sitter Profile</h2>
      </div>
      <div className="h-[calc(100vh_-_20rem)] overflow-auto flex flex-col gap-5">
        <div>RATE</div>
        <div>AVAILABILITY</div>
      </div>
    </div>
  );
}

export default EditSitterProfile;
