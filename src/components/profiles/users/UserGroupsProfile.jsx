import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { selectGroups, fetchMemberships } from '../../../slices/groupsSlice';

const UserGroupsProfile = (props) => {
  const { user, userAuth } = props;
  const dispatch = useDispatch();
  const { id } = useParams();
  const { memberships } = useSelector(selectGroups);

  useEffect(() => {
    dispatch(fetchMemberships(id));
  }, [dispatch]);

  // console.log(memberships);
  return (
    <div>
      <h2 className="font-semibold text-sm pb-5">MY GROUPS</h2>
      <div className="flex flex-col gap-5">
        {!userAuth ? (
          <div>
            <Link to="/login" className="hover:text-bold-blue">
              Log In
            </Link>{' '}
            or{' '}
            <Link to="/signup" className="hover:text-bold-purple">
              Sign Up
            </Link>{' '}
            to see groups
          </div>
        ) : (
          memberships.map((membership) => (
            <div
              key={membership.id}
              className="flex flex-col gap-2 bg-slate-50 py-8 px-5 rounded-lg"
            >
              <Link to={`/groups/${membership.id}`}>
                <div className="flex flex-col gap-5">
                  <div className="font-semibold">
                    {membership.name.toUpperCase()}
                  </div>
                  <div>{membership.description}</div>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UserGroupsProfile;
