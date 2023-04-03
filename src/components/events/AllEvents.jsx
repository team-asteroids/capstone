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
  };

  const viewAll = (e) => {
    e.preventDefault();
    setAttemptSearch(false);
    dispatch(fetchAllEvents());
    setSearch('');
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
    setAttemptSearch(false);
    dispatch(fetchAllEvents());
  }, [dispatch]);

  const validClass =
    'appearance-none block w-full bg-white-200 border border-gray-600 rounded py-2.5 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue my-3 font-rubik';

  const validButton =
    'my-3 py-3 px-4 rounded ease-in-out duration-300 hover:bg-pale-purple bg-bold-purple text-bright-white font-rubik font-semibold text-sm';

  const disabledButton =
    'my-3 py-3 px-4 rounded bg-opacity-25 bg-bold-purple text-bright-white font-rubik font-semibold text-sm';

  const buttonClass =
    'text-sm px-4 py-2 text-bright-white rounded-lg bg-bold-purple font-semibold ease-in-out duration-100 hover:bg-pale-purple';

  return (
    <div className="bg-cover bg-no-repeat bg-[url('img/profile-bg.jpg')] h-full">
      <h2 className="font-rubikmono text-5xl pt-16 text-center m-auto">
        EVENTS
      </h2>
      <div className="flex flex-row justify-center pt-16 px-20">
        <div className="flex flex-row justify-center gap-24">
          <div className="flex flex-col gap-5 min-h-screen">
            <div
              id="search"
              className="min-w-max flex flex-row items-center gap-3"
            >
              <h2 className="font-rubikmono text-xl text-left">SEARCH</h2>
              <div className="flex flex-col gap-3">
                <form onSubmit={handleSearch}>
                  <div className="flex flex-row gap-5 items-center justify-center">
                    <div className="min-w-2/3">
                      <input
                        className={validClass}
                        type="text"
                        placeholder="find it..."
                        value={search}
                        disabled={attemptSearch ? true : false}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
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
            <div>
              <Link to="/events/create">
                <p className="px-4 py-3 w-fit font-semibold bg-bold-blue text-bright-white rounded-lg hover:bg-pale-blue ease-in-out duration-200">
                  NEW EVENT
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-2/3 font-rubikmono overflow-auto gap-5">
          {searchAlert && attemptSearch && (
            <div className="font-rubik text-center">
              Viewing search results for: {searchAlert}
            </div>
          )}
          <div className="flex flex-col gap-5">
            {eventsSorted.length === 0 ? (
              <div className="font-rubik">
                <div className="m-auto">
                  <h1 className="text-4xl text-center font-rubikmono pt-20 font-bold text-center">
                    OOPS! NO RESULTS!
                  </h1>
                </div>
              </div>
            ) : (
              <div className="">
                <EventsView events={eventsSorted} userAuth={userAuth} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllEvents;
