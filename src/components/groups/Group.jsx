import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addGroupMember } from '../../slices/groupsSlice';
import { selectAuth } from '../../slices/authSlice';

const Group = (props) => {
  const { group, members } = props;
  //   console.log('group --> ', group);
  //   console.log('members --> ', members);
  const mem = members.length;
  const groupId = group.id;

  const dispatch = useDispatch();
  const [logInPrompt, setLogInPrompt] = useState(false);

  const { userAuth, token } = useSelector(selectAuth);

  const joinGroup = async (e) => {
    e.preventDefault();
    if (token) {
      await dispatch(addGroupMember(groupId));
    } else {
      setLogInPrompt(true);
    }
  };

  return (
    <div className="bg-white-smoke border rounded-lg shadow-lg">
      <div>
        <img
          className="rounded-t-lg"
          src={require('../../img/groups/party-pups.jpg')}
          alt="Group"
        />
        <div className="p-2">
          <p>{`${group.name}`}</p>
          <p>Topic: {`${group.topic}`}</p>
          <p>{`${mem}`} members</p>
          {!logInPrompt ? (
            <div className="flex justify-between">
              <div>
                <Link to={`/groups/${group.id}`} state={{ groupId: group.id }}>
                  <button className="p-1 rounded-lg bg-[#cbd5e1]">
                    View Group
                  </button>
                </Link>
              </div>
              <div>
                <button
                  onClick={joinGroup}
                  className="p-1 rounded-lg bg-[#cbd5e1]"
                >
                  Join Group
                </button>
              </div>
            </div>
          ) : (
            <Link to="/login">
              <button className="p-1 rounded-lg bg-[#cbd5e1]">
                Please log in to unleash this group adventure!
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Group;
