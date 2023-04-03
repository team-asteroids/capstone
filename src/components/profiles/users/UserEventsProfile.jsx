import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {
  getMyRsvpsAsync,
  selectMyRsvps,
  fetchAllEvents,
  selectEvents,
} from '../../../slices/eventsSlice';
import { format } from 'date-fns';

const UserEventsProfile = (props) => {
  const { user } = props;
  const { id } = useParams();
  const rsvps = useSelector(selectMyRsvps);
  const { events } = useSelector(selectEvents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyRsvpsAsync(id));
    dispatch(fetchAllEvents());
  }, [dispatch, id]);

  return (
    <div>
      <h2 className="font-semibold text-sm pb-5">UPCOMING EVENTS</h2>
      <div className="flex flex-col gap-5">
        {rsvps.map((rsvp) => (
          <div key={rsvp.id}>
            {events && events.length
              ? events.map((event) => (
                  <Link to={`/events/${rsvp.eventId}`}>
                    {event.id === rsvp.eventId ? (
                      <div className="flex flex-col gap-2 bg-slate-50 py-8 px-5 rounded-lg">
                        <div className="font-semibold">
                          {event.topic.toUpperCase()}
                        </div>
                        <div>Event Id: {rsvp.eventId}</div>
                        <div>{event.description}</div>
                        <div>Location: {event.zip_code}</div>
                      </div>
                    ) : null}
                  </Link>
                ))
              : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserEventsProfile;
