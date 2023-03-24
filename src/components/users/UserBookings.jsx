import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { attemptTokenLogin, selectAuth } from '../../slices/authSlice';
import {
  fetchAllBookings,
  resetBookingStatus,
  selectBookings,
} from '../../slices/bookingsSlice';

function UserBookings() {
  const dispatch = useDispatch();
  const { userAuth, token } = useSelector(selectAuth);
  const [userBookings, setUserBookings] = useState([]);
  const { status, allBookings } = useSelector(selectBookings);

  useEffect(() => {
    dispatch(attemptTokenLogin());
  }, [dispatch]);

  useEffect(() => {
    if (userAuth.id) {
      const id = userAuth.id;
      dispatch(fetchAllBookings({ id, token }));
    }

    setUserBookings(allBookings);

    return () => {
      dispatch(resetBookingStatus());
    };
  }, [userAuth]);

  if (!userAuth && !userAuth.firstName)
    return <div className="font-rubikmono">Fetching good things...</div>;

  // map through bookings and add a filter for (pending, approved, completed, declined/cancelled/withdrawn)

  return (
    <div>
      <h2 className="font-rubikmono">Manage Bookings</h2>
      {status === 'success' && userBookings.length > 0 ? <p>Bookings</p> : null}
    </div>
  );
}

export default UserBookings;
