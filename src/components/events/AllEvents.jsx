import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllEvents,
  selectEvents,
  fetchEventNames,
} from '../../slices/eventsSlice';
import { selectAuth } from '../../slices/authSlice';
import EventsView from './EventsView';

const AllEvents = () => {
  const dispatch = useDispatch();
  const { events } = useSelector(selectEvents);

  const [search, setSearch] = useState('');
  const [searchAlert, setSearchAlert] = useState('');

  const { userAuth } = useSelector(selectAuth);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchEventNames(search));
    setSearchAlert(search);
    setSearch('');
  };

  const viewAll = (e) => {
    e.preventDefault();
    dispatch(fetchAllEvents());
    setSearchAlert('');
  };

  const eventsSorted = events.slice(0).sort((a, b) => {
    const timeA = a.event_start;
    const timeB = b.event_start;
    if (timeA < timeB) {
      return -1;
    }
    if (timeA > timeB) {
      return 1;
    }
    return 0;
  });

  // zip code

  useEffect(() => {
    dispatch(fetchAllEvents());
  }, [dispatch]);

  return (
    <>
      <div className="bg-white-smoke border rounded-lg shadow-lg">
        <div className="p-4 flex flex-row justify-between">
          <div className="basis-1/3 ">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search events"
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
      {eventsSorted.length === 0 ? (
        <div className="bg-gradient-to-r from-yellow-400 to-blue-300">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center text-white">
              No results found
            </h1>
          </div>
        </div>
      ) : (
        <div>
          <EventsView events={eventsSorted} userAuth={userAuth} />
        </div>
      )}
    </>
  );
};

export default AllEvents;
