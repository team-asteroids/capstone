import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../slices/authSlice';
import { fetchAllGroups, fetchGroupNames } from '../../slices/groupsSlice';
import GroupsView from './GroupsView';

const BrowseGroups = () => {
  const dispatch = useDispatch();
  const groups = useSelector((state) => state.groups.allGroups);

  const { userAuth } = useSelector(selectAuth);

  const [search, setSearch] = useState('');
  const [searchAlert, setSearchAlert] = useState('');
  const [topic, setTopic] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchGroupNames(search));
    setSearchAlert(search);
    setSearch('');
  };

  const viewAll = (e) => {
    e.preventDefault();
    dispatch(fetchAllGroups());
    setSearchAlert('');
  };

  const groupSelection = groups.filter((group) => {
    if (topic === '') {
      return group;
    } else if (group.group.topic === topic) {
      return group;
    }
  });

  // console.log('topic -->', topic);
  // console.log(
  //   'group topic -->',
  //   groups.map((group) => group)
  // );

  useEffect(() => {
    dispatch(fetchAllGroups());
  }, [dispatch]);

  return (
    <>
      <h3 className=" text-bold-purple text-lg font-rubikmono">Groups</h3>
      <div className="bg-white-smoke border rounded-lg shadow-lg">
        <div className="p-4 flex flex-row justify-between">
          <div className="basis-1/3 ">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search groups"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                type="submit"
                className="p-1 rounded-lg bg-[#cbd5e1] font-mono"
              >
                Search
              </button>
            </form>
            <button
              onClick={viewAll}
              className="p-1 rounded-lg bg-[#cbd5e1] font-mono"
            >
              View All
            </button>
          </div>
          {searchAlert && (
            <div className="basis-2/3 ">
              <div className="font-mono">
                Viewing search results for: {searchAlert}
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <div className="bg-white-smoke border rounded-lg shadow-lg font-rubik">
          <div className="p-2">
            <h2 className="font-rubikmono">Filter by Topic</h2>
            <select value={topic} onChange={(e) => setTopic(e.target.value)}>
              <option value="">All</option>
              <option value="playdates">Playdates</option>
              <option value="recommendations">Recommendations</option>
              <option value="exotic pets">Exotic Pets</option>
              <option value="neighborhood">Neighborhood</option>
            </select>
          </div>
        </div>
      </div>
      <div className="p-6 bg-[#fca5a5]">
        <div>
          <div>
            <GroupsView groups={groupSelection} userAuth={userAuth} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BrowseGroups;
