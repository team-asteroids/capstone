import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { selectGroups, fetchMemberships } from '../../../slices/groupsSlice';

const UserGroupsProfile = (props) => {
  const { user } = props;
  const dispatch = useDispatch();
  const { id } = useParams();
  const { memberships } = useSelector(selectGroups);

  useEffect(() => {
    dispatch(fetchMemberships(id));
  }, [dispatch]);

  // console.log(memberships);
  return (
    <div>
      <h2 className="font-semibold text-sm">MY GROUPS</h2>
      <ul>
        {memberships.map((membership) => (
          <Link to={`/groups/${membership.id}`}>
            {' '}
            <div className="border-solid border-2 rounded-lg bg-slate">
              <li>Group Name: {membership.name}</li>
              <li>Topic: {membership.topic}</li>
              <li>Description: {membership.description}</li>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default UserGroupsProfile;
