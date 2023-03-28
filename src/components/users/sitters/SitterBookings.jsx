import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectSitters,
  fetchSitterBookings,
  resetSitterStatus,
} from '../../../slices/sittersSlice';
import { selectAuth } from '../../../slices/authSlice';

const SitterBookings = (props) => {
  const { sitter } = props;

  const dispatch = useDispatch();
  const { token } = useSelector(selectAuth);
  const { sitterBookings } = useSelector(selectSitters);

  let pending = [];
  let approved = [];
  let completed = [];
  let cancelled = [];

  useEffect(() => {
    if (sitter && sitter.id) {
      const id = sitter.id;
      dispatch(fetchSitterBookings({ id, token }));
    }
    return () => {
      dispatch(resetSitterStatus());
    };
  }, [sitter]);

  if (sitterBookings && sitterBookings.length) {
    sitterBookings.forEach((booking) => {
      if (booking.status === 'pending' && !pending.includes(booking))
        pending.push(booking);

      if (booking.status === 'approved' && !approved.includes(booking))
        approved.push(booking);

      if (booking.status === 'complete' && !completed.includes(booking))
        completed.push(booking);

      if (
        ['cancelled', 'withdrawn', 'declined'].includes(booking.status) &&
        !cancelled.includes(booking)
      )
        cancelled.push(booking);
    });
  }

  if (!sitterBookings.length) return <div>Loading...</div>;

  return (
    <div className="font-rubik flex flex-col gap-5">
      <div>
        <h2 className="font-rubikmono">Manage Sitter Bookings</h2>
      </div>
      <div className="h-[calc(100vh_-_20rem)] overflow-auto flex flex-col gap-5">
        <div>
          <p>Review Booking Requests ({pending.length})</p>
        </div>
        <div>
          <p>Upcoming ({approved.length})</p>
          {approved && approved.length
            ? approved.map((booking) => (
                <div key={booking.id}>
                  <p>{booking.status}</p>
                </div>
              ))
            : 'no upcoming bookings!'}
        </div>
        <div>
          <p>Past ({completed.length})</p>
          <div>
            {completed && completed.length
              ? completed.map((booking) => (
                  <div key={booking.id}>
                    <p>{booking.status}</p>
                  </div>
                ))
              : 'no past bookings!'}
          </div>
        </div>
        <div>
          <p>Cancelled ({cancelled.length})</p>
          {cancelled && cancelled.length
            ? cancelled.map((booking) => (
                <div key={booking.id}>
                  <p>{booking.status}</p>
                </div>
              ))
            : 'no cancelled bookings!'}
        </div>
      </div>
    </div>
  );
};

export default SitterBookings;
