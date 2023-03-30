import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getMyRsvpsAsync, selectMyRsvps } from '../../../slices/eventsSlice';

const UserEventsProfile = (props) => {
  const { user } = props;
  const { id } = useParams();
  const rsvps = useSelector(selectMyRsvps);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyRsvpsAsync(id));
  }, [dispatch, id]);

  console.log(rsvps);
  return (
    <div>
      <h2 className="font-semibold text-sm">UPCOMING EVENTS</h2>
      <ul>
        {rsvps.map((rsvp) => (
          <Link to={`/events/${rsvp.eventId}`}>
            <li>Event Id: {rsvp.eventId}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default UserEventsProfile;
