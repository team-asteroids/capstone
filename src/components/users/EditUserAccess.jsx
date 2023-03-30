import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuth,
  editSingleUser,
  updateAccessData,
} from '../../slices/authSlice';

function EditUserAccess(props) {
  const dispatch = useDispatch();

  const { user, access } = props;

  // if (user && user.id) console.log(user, access);

  const submitUserEdits = (evt) => {
    evt.preventDefault();
  };

  const submitAccessEdits = (evt) => {
    evt.preventDefault();
  };

  return (
    <div className="font-rubik flex flex-col gap-5">
      <div>
        <h2 className="font-rubikmono mb-2">Edit Profile</h2>
        <div className="h-[calc(100vh_-_20rem)] overflow-auto flex flex-col gap-5">
          <div>
            {user && user.id ? (
              <section>
                <form onSubmit={submitUserEdits}>
                  <div className="flex flex-wrap mb-5">
                    <div className="w-full flex flex-col"></div>
                  </div>
                </form>
              </section>
            ) : (
              'user profile loading'
            )}
          </div>
          <div>
            <h2 className="font-rubikmono mb-2">Edit Personal Details</h2>
            {access && access.id ? (
              <section>
                <form onSubmit={submitAccessEdits}>
                  <div className="flex flex-wrap mb-5">
                    <div className="w-full flex flex-col"></div>
                  </div>
                </form>
              </section>
            ) : (
              'access data loading'
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditUserAccess;
