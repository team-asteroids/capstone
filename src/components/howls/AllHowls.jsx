import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllGroups } from '../../slices/groupsSlice';
import Group from './Group';

const AllHowls = () => {
  const dispatch = useDispatch();
  const groups = useSelector((state) => state.groups.allGroups);

  useEffect(() => {
    dispatch(fetchAllGroups());
  }, [dispatch]);

  return (
    <>
      <div className="p-6 bg-[#fca5a5]">
        <h3 className=" text-bold-purple text-lg font-rubikmono ">Groups</h3>
        <h3 className="text-lg font-rubikmono ">
          <Link to={`/groups/create`}>
            <li>Add New Group</li>
          </Link>
        </h3>
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

export default AllHowls;
