import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { logOut } from '../../slices/authSlice';

function UserAccount() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const attemptLogOut = async () => {
    await dispatch(logOut());
    navigate('/');
  };

  return (
    <div>
      <h2>User Account</h2>
      <button onClick={attemptLogOut}>Log Out</button>
    </div>
  );
}

export default UserAccount;
