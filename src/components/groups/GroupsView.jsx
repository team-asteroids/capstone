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
    <div className="flex flex-col justify-between">
      <div className="flex flex-row flex-wrap gap-8">
        {currentItems.map((group) => (
          <div key={group.group.id} id="cardItem" className="col-xs-2">
            <Group group={group.group} members={group.members} />
          </div>
        ))}
      </div>
      <div className="py-16">
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
