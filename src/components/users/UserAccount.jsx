import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
