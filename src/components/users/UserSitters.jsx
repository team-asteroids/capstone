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

  const labelClass = 'text-xs font-rubikmono';

  return (
    <div className="font-rubik font-regular flex flex-col gap-5">
      <div>
        <p>My Sitters</p>
      </div>
      <div>
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
          <tbody className="font-rubik font-regular">
            {userAuthSitters && userAuthSitters.length
              ? userAuthSitters.map((sitter) => (
                  <tr key={sitter.id} className="font-rubik font-regular">
                    <th className="font-regular">{sitter.id}</th>
                    <th className="font-regular">{`${sitter.firstName} ${sitter.lastName}`}</th>
                    <th className="font-regular">{sitter.userName}</th>
                    <th className="font-regular">{sitter.email}</th>
                    <th className="font-regular">{sitter.clientStatus}</th>
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
