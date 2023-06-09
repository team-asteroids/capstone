import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllGroups, fetchGroupNames } from '../../slices/groupsSlice';
import Group from './Group';
import Pagination from '../ui/Pagination';

const BrowseGroups = () => {
  const dispatch = useDispatch();
  const groups = useSelector((state) => state.groups.allGroups);
  const [search, setSearch] = useState('');

  // Pagination setup
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  // Calculate what to map each time page changes
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = groups.slice(indexOfFirstItem, indexOfLastItem);
  const nPages = Math.ceil(groups.length / itemsPerPage);

  useEffect(() => {
    dispatch(fetchAllGroups());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchGroupNames(search));
    setSearch('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search groups"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type="submit">Search</button>
      </form>
      <div className="p-6 bg-[#fca5a5]">
        <h3 className=" text-bold-purple text-lg font-rubikmono ">Groups</h3>
        <h3 className="text-lg font-rubikmono ">
          <Link to={`/groups/create`}>
            <li>Add New Group</li>
          </Link>
        </h3>
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
    </>
  );
};

export default BrowseGroups;
