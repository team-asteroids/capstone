import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllEvents,
  selectEvents,
  fetchEventNames,
} from '../../slices/eventsSlice';
import { Link } from 'react-router-dom';
import Pagination from '../ui/Pagination';
import EventList from './EventList';

const AllEvents = () => {
  const dispatch = useDispatch();
  const { events } = useSelector(selectEvents);
  const [search, setSearch] = useState('');

  const sortedEvents = events.slice(0).sort((a, b) => {
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

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  // Pagination -- get current posts
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedEvents.slice(indexOfFirstItem, indexOfLastItem);
  const nPages = Math.ceil(sortedEvents.length / itemsPerPage);

  useEffect(() => {
    dispatch(fetchAllEvents());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchEventNames(search));
    setSearch('');
  };

  return (
    <>
      <div className="bg-white-smoke border rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search events"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="bg-gradient-to-r from-bold-blue via-bold-purple to-white-smoke">
        <Link to="/events/create">
          <div>Create Event</div>
        </Link>
        <div className="container mx-auto ">
          {currentItems.map((event) => (
            <EventList
              key={event.id}
              eventId={event.id}
              creatorId={event.creatorId}
              topic={event.topic}
              description={event.description}
              date={event.event_start}
              zip={event.zip_code}
            />
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

export default AllEvents;
