import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { logOut, selectAuth } from '../../slices/authSlice';
import defaultImg from '../../img/default-dog.jpg';

function UserBookings() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userAuth } = useSelector(selectAuth);

  // populate user state

  const attemptLogOut = async () => {
    await dispatch(logOut());
    navigate('/');
  };

  if (!userAuth.firstName)
    return <div className="font-rubikmono">Fetching good things...</div>;

  return <div>TEST</div>;
}

export default UserBookings;
