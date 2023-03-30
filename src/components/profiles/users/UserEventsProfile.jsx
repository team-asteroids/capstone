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
      <h2 className="font-semibold text-sm">UPCOMING EVENTS</h2>
      <ul>
        {rsvps.map((rsvp) => (
          <>
            <Link to={`/events/${rsvp.eventId}`}>
              {events.map((event) =>
                event.id === rsvp.eventId ? (
                  <div className="border-solid border-2 rounded-lg bg-slate">
                    <li>Event Id: {rsvp.eventId}</li>
                    <li>Type: {event.topic}</li>
                    <li>Description: {event.description}</li>
                    <li>Location: {event.zip_code}</li>
                  </div>
                ) : (
                  <li></li>
                )
              )}
            </Link>
            <></>
          </>
        ))}
      </ul>
    </div>
  );
};

export default UserEventsProfile;
