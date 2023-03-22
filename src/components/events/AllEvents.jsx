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

  console.log(events);

  return (
    <>
      <div>
        {events.events.map((event) => (
          <EventList
            key={event.id}
            creatorId={event.creatorId}
            topic={event.topic}
            description={event.description}
            date={event.event_start}
            zip={event.zip_code}
          />
        ))}
      </div>
    </>
  );
};

export default AllEvents;
