import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../ui/Pagination';
import Group from './Group';

const GroupsView = (props) => {
  const { groups, userAuth } = props;

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Pagination -get current posts
  const currentItems = groups.slice(indexOfFirstItem, indexOfLastItem);
  const nPages = Math.ceil(groups.length / itemsPerPage);

  return (
    <div>
      <div className="p-6 bg-[#fca5a5]">
        {userAuth && (
          <div>
            <h3 className="text-lg font-rubikmono ">
              <Link to={`/groups/create`}>
                <li>Add New Group</li>
              </Link>
            </h3>
          </div>
        )}
        <div className="p-6 grid grid-cols-3 gap-8 font-mono">
          {currentItems.map((group) => (
            <div key={group.group.id} id="cardItem" className="col-xs-2">
              <Group group={group.group} members={group.members} />
            </div>
          ))}
        </div>
        <br></br>
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default GroupsView;
