import React from 'react';

function EditUserProfile() {
  return (
    <div className="font-rubik flex flex-col gap-5">
      <div>
        <h2 className="font-rubikmono">Edit Profile</h2>
      </div>
      <div className="h-[calc(100vh_-_20rem)] overflow-auto flex flex-col gap-5">
        <section>
          <form>user details</form>
        </section>
      </div>
    </div>
  );
}

export default EditUserProfile;
