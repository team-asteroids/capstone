import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllUserAuthSitters, selectAuth } from '../../slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const UserSitters = (props) => {
  const dispatch = useDispatch();
  const { user } = props;
  const { token, userAuthSitters } = useSelector(selectAuth);

  useEffect(() => {
    if (user && user.id) {
      const id = user.id;
      dispatch(fetchAllUserAuthSitters({ id, token }));
    }
  }, [user]);

  // console.log(sittersOfUserAuth);

  const labelClass = 'text-xs font-rubikmono';

  return (
    <div className="font-rubik font-regular flex flex-col gap-5">
      <div>
        <p>My Sitters</p>
      </div>
      <div className="">
        <table className="w-full">
          <thead>
            <tr className={labelClass}>
              <th>Sitter Id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Status</th>
              <th>History</th>
              <th>Rate / Review</th>
            </tr>
          </thead>
          <tbody>
            {userAuthSitters && userAuthSitters.length
              ? userAuthSitters.map((sitter) => (
                  <tr key={sitter.id}>
                    <th>{sitter.id}</th>
                    <th>{`${sitter.firstName} ${sitter.lastName}`}</th>
                    <th>{sitter.userName}</th>
                    <th>{sitter.email}</th>
                    <th>{sitter.clientStatus}</th>
                    <th></th>
                    <th>
                      <Link to="/review">Rate / Review</Link>
                    </th>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserSitters;
