import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllGroups } from '../../slices/groupsSlice';
import Group from './Group';

const BrowseGroups = () => {
  const dispatch = useDispatch();
  const groups = useSelector((state) => state.groups.allGroups);

  useEffect(() => {
    dispatch(fetchAllGroups());
  }, [dispatch]);

  //   console.log('groups -->', groups);

  return (
    <>
      <div className="p-6 bg-[#fca5a5]">
        <h3 className=" text-bold-purple text-lg font-rubikmono ">Groups</h3>
        <div className="p-6 grid grid-cols-3 gap-8 font-mono">
          {groups.map((group) => (
            <div key={group.group.id} id="cardItem" className="col-xs-2">
              <Group group={group.group} members={group.members} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BrowseGroups;
