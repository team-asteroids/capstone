import React, { useEffect } from 'react';
import { fetchAllUserAuthSitters, selectAuth } from '../../slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const UserSitters = (props) => {
  const dispatch = useDispatch();
  const { user } = props;
  const { token, sittersOfUserAuth } = useSelector(selectAuth);

  useEffect(() => {
    if (user && user.id) {
      const id = user.id;
      dispatch(fetchAllUserAuthSitters({ id, token }));
    }
  }, [user]);

  // console.log(sittersOfUserAuth);

  return <div>UserSitters</div>;
};

export default UserSitters;
