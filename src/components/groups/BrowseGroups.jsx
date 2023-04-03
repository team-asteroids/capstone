import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
  const [attemptSearch, setAttemptSearch] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setAttemptSearch(true);
    dispatch(fetchGroupNames(search));
    setSearchAlert(search);
  };

  const viewAll = (e) => {
    e.preventDefault();
    setAttemptSearch(false);
    dispatch(fetchAllGroups());
    setSearch('');
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

  const validClass =
    'appearance-none block w-full bg-white-200 border rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue font-rubik';

  const buttonClass =
    'text-sm px-4 py-2 text-bright-white rounded-lg bg-bold-purple font-semibold ease-in-out duration-100 hover:bg-pale-purple';

  return (
    <div className="bg-cover bg-left-top bg-no-repeat bg-[url('img/groups-bg.jpg')] h-full">
      <h2 className="font-rubikmono text-5xl pt-16 text-center m-auto">
        GROUPS
      </h2>
      <div className="flex flex-row justify-center pt-16 px-10 gap-10">
        <div className="min-w-1/4 flex flex-col gap-5 min-h-screen">
          <div
            id="search"
            className="min-w-max flex flex-row items-center gap-3"
          >
            <h3 className="font-rubikmono text-xl text-left">SEARCH</h3>
            <div>
              <form onSubmit={handleSearch}>
                <div className="flex flex-row gap-3 items-center">
                  <input
                    type="text"
                    className={validClass}
                    placeholder="find it..."
                    value={search}
                    disabled={attemptSearch ? true : false}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <div>
                    {!attemptSearch ? (
                      <div>
                        <button type="submit" className={buttonClass}>
                          FETCH
                        </button>
                      </div>
                    ) : (
                      <div>
                        <button
                          type="submit"
                          onClick={viewAll}
                          className="font-semibold ease-in-out duration-100 hover:text-bold-orange"
                        >
                          CLEAR
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div id="sort" className="min-w-max flex flex-row items-center gap-3">
            <h2 className="font-rubikmono text-xl text-left">SORT</h2>
            <div>
              <select
                value={topic}
                className={validClass}
                onChange={(e) => setTopic(e.target.value)}
              >
                <option value="">All</option>
                <option value="playdates">Playdates</option>
                <option value="recommendations">Recommendations</option>
                <option value="exotic pets">Exotic Pets</option>
                <option value="neighborhood">Neighborhood</option>
              </select>
            </div>
          </div>
          {userAuth && (
            <div>
              <h3 className="font-rubikmono ">
                <Link to={`/groups/create`}>
                  <p className="bg-bold-blue px-3 py-3 hover:bg-pale-blue ease-in-out duration-300 text-bright-white rounded-lg max-w-fit">
                    Add Group
                  </p>
                </Link>
              </h3>
            </div>
          )}
        </div>

        <div className="min-w-3/4 font-rubikmono overflow-auto gap-5">
          {searchAlert && (
            <div className="font-rubik text-center">
              Viewing search results for: {searchAlert}
            </div>
          )}
          <div>
            {searchAlert && groups.length < 1 ? (
              <div className="p-5 mx-auto">
                <h1 className="text-4xl font-bold text-center text-white">
                  No results found
                </h1>
              </div>
            ) : null}
          </div>
          <div className="flex flex-col">
            <GroupsView groups={groupSelection} userAuth={userAuth} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseGroups;
