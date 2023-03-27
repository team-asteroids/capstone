import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../slices/authSlice';
import { UserPetProfiles } from '../index';

function EditUserPets() {
  const { userAuth } = useSelector(selectAuth);
  return (
    <div className="font-rubik flex flex-col gap-5">
      <div>
        <h2 className="font-rubikmono">Update Pet Profiles</h2>
      </div>
      <div className="h-[calc(100vh_-_20rem)] overflow-auto flex flex-col gap-5">
        <div>
          <UserPetProfiles user={userAuth} />
        </div>
        <div>Add new pet profile</div>
      </div>
    </div>
  );
}

export default EditUserPets;
