import React from 'react';
import { Link } from 'react-router-dom';

const Group = (props) => {
  const { group, members } = props;
  //   console.log('group --> ', group);
  //   console.log('members --> ', members);
  const mem = members.length;

  return (
    <div className="bg-white-smoke border rounded-lg shadow-lg">
      <div className="p-2">
        <img src={group.imageSrc} alt="Group" />
        <p>{`${group.name}`}</p>
        <p>Topic: {`${group.topic}`}</p>
        <p>{`${mem}`} members</p>
        <div className="flex justify-between">
          <div>
            <Link to={`/groups/${group.id}`} state={{ groupId: group.id }}>
              <button className="p-1 rounded-lg bg-[#cbd5e1]">
                View Group
              </button>
            </Link>
          </div>
          <div>
            <button className="p-1 rounded-lg bg-[#cbd5e1]">Join Group</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group;
