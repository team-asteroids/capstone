import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../ui/Pagination';
import EventList from './EventList';

const EventsView = (props) => {
  const { events, userAuth } = props;

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  // Pagination -- get current posts
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = events.slice(indexOfFirstItem, indexOfLastItem);
  const nPages = Math.ceil(events.length / itemsPerPage);

  return (
    <div className="h-[calc(100vh_-_5rem)]">
      <div>
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
    </div>
  );
};

export default EventsView;
