import React from 'react';

const Group = (props) => {
  const { group, members } = props;
  //   console.log('group --> ', group);
  //   console.log('members --> ', members);
  const mem = members.length;

  return (
    <div className="border rounded-lg shadow-lg">
      <img src={group.imageSrc} alt="Group" />
      <p>{`${group.name}`}</p>
      <p>Topic: {`${group.topic}`}</p>
      <p>{`${mem}`} members</p>
      <p>View Group</p>
      <p>Join Group</p>
    </div>
  );
};

export default Group;
