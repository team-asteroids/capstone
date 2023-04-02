import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../ui/Pagination';
import EventList from './EventList';

const EventsView = (props) => {
  const { events, userAuth } = props;

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  // Pagination -- get current posts
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = events.slice(indexOfFirstItem, indexOfLastItem);
  const nPages = Math.ceil(events.length / itemsPerPage);

  return (
    <div className="flex flex-col gap-5 overflow-auto h-[calc(100vh_-_20rem)]">
      <div className="justify-center">
        <div className="container px-10 m-auto grid grid-cols-3 gap-10 flex-none">
          {currentItems.map((event) => (
            <div className="w-full" key={event.id}>
              <EventList
                eventId={event.id}
                creatorId={event.creatorId}
                topic={event.topic}
                description={event.description}
                date={event.event_start}
                zip={event.zip_code}
              />
            </div>
          ))}
        </div>
        <div className="p-10 absolute">
          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default EventsView;
