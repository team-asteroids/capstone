import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllEvents, selectEvents } from '../../slices/eventsSlice';
import EventList from './EventList';

const AllEvents = () => {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);

  useEffect(() => {
    dispatch(fetchAllEvents());
  }, [dispatch]);

  return (
    <div className="bg-gradient-to-r from-bold-blue via-bold-purple to-bold-pink ...">
      <div className="container mx-auto">
        {events.events.map((event) => (
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
    </div>
  );
};

export default AllEvents;
