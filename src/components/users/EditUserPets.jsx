import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../slices/authSlice';
import { Link } from 'react-router-dom';
import { UserPetProfiles } from '../index';

function EditUserPets() {
  const { userAuth } = useSelector(selectAuth);

  const buttonClass =
    'w-1/4 font-semibold bg-bold-purple text-white rounded px-5 py-3 ease-in-out duration-200 hover:bg-pale-purple';

  return (
    <div className="font-rubik flex flex-col gap-5">
      <div>
        <h2 className="font-rubikmono">Update Pet Profiles</h2>
      </div>
      <div className="h-[calc(100vh_-_20rem)] overflow-auto flex flex-col gap-5">
        <div>
          <UserPetProfiles user={userAuth} />
        </div>
        <div>
          <p className="mt-10">
            <Link to="/account/addpet" className={buttonClass}>
              ADD NEW PET
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default EditUserPets;
