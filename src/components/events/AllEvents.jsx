import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
  const [attemptSearch, setAttemptSearch] = useState(false);

  const { userAuth } = useSelector(selectAuth);

  const handleSearch = (e) => {
    e.preventDefault();
    setAttemptSearch(true);
    dispatch(fetchEventNames(search));
    setSearchAlert(search);
    setSearch('');
  };

  const viewAll = (e) => {
    e.preventDefault();
    setAttemptSearch(false);
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

  useEffect(() => {
    setAttemptSearch(false);
    dispatch(fetchAllEvents());
  }, [dispatch]);

  const validClass =
    'appearance-none block w-full bg-white-200 border border-gray-600 rounded py-2.5 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue my-3 font-rubik';

  const validButton =
    'my-3 py-3 px-4 rounded ease-in-out duration-300 hover:bg-pale-purple bg-bold-purple text-bright-white font-rubik font-semibold text-sm';
  const disabledButton =
    'my-3 py-3 px-4 rounded bg-opacity-25 bg-bold-purple text-bright-white font-rubik font-semibold text-sm';

  return (
    <div className="bg-cover bg-no-repeat bg-[url('img/profile-bg.jpg')] h-[calc(100vh_-_10rem)]">
      <div className="px-10 pt-5 flex flex-row justify-between gap-5">
        <div>
          <div className="flex flex-col gap-3">
            <form onSubmit={handleSearch}>
              <div className="flex flex-row gap-5 items-center justify-center">
                <div className="min-w-2/3">
                  <input
                    className={validClass}
                    type="text"
                    placeholder="Search events"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>

                {!attemptSearch ? (
                  <div>
                    <button
                      type="submit"
                      className={search ? validButton : disabledButton}
                      disabled={search ? false : true}
                    >
                      SEARCH
                    </button>
                  </div>
                ) : (
                  <div className="min-w-fit align-baseline">
                    <button
                      type="submit"
                      className="my-3 py-3 px-4 rounded ease-in-out duration-300 hover:bg-pale-blue bg-bold-blue text-bright-white font-rubik font-semibold text-sm"
                      onClick={viewAll}
                    >
                      VIEW ALL
                    </button>
                  </div>
                )}
              </div>
            </form>
          </div>
          {searchAlert && attemptSearch ? (
            <div className="font-rubik my-auto mb-5">
              <p>Viewing search results for: {searchAlert}</p>
            </div>
          ) : (
            <div className="mb-5"></div>
          )}
        </div>
        <div>
          <Link to="/events/create">
            <p className={validButton}>NEW EVENT</p>
          </Link>
        </div>
      </div>
      <div className="overflow-auto flex flex-col gap-5">
        {eventsSorted.length === 0 ? (
          <div className="">
            <div className="m-auto">
              <h1 className="text-4xl text-center font-rubikmono pt-20 font-bold text-center">
                OOPS! NO RESULTS!
              </h1>
            </div>
          </div>
        ) : (
          <div className="overflow-auto">
            <EventsView events={eventsSorted} userAuth={userAuth} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AllEvents;
