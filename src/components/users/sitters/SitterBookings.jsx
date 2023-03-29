import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectSitters,
  fetchSitterBookings,
  resetSitterStatus,
  resetSingleBooking,
} from '../../../slices/sittersSlice';
import { selectAuth } from '../../../slices/authSlice';
import { BookingCard } from '../../index';
import { Divider } from '@mui/material';

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
      dispatch(resetSingleBooking());
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
      <div>
        <p>Review Booking Requests ({pending.length})</p>
      </div>
      <div className="h-[calc(100vh_-_20rem)] overflow-auto flex flex-col gap-5">
        <div>
          <p className="font-rubikmono text-lg pb-2">
            Upcoming ({approved.length})
          </p>
          <div className="flex flex-col gap-5">
            {approved && approved.length
              ? approved.map((booking) => (
                  <div key={booking.id}>
                    <BookingCard booking={booking} />
                    <div className="pt-5">
                      <Divider />
                    </div>
                  </div>
                ))
              : 'no upcoming bookings!'}
          </div>
        </div>
        <div>
          <p className="font-rubikmono text-lg pb-2">
            Completed ({completed.length})
          </p>
          <div className="flex flex-col gap-5">
            {completed && completed.length
              ? completed.map((booking) => (
                  <div key={booking.id}>
                    <BookingCard booking={booking} />
                    <div className="pt-5">
                      <Divider />
                    </div>
                  </div>
                ))
              : 'no past bookings!'}
          </div>
        </div>
        <div>
          <p className="font-rubikmono text-lg pb-2">
            Cancelled ({cancelled.length})
          </p>
          <div className="flex flex-col gap-5">
            {cancelled && cancelled.length
              ? cancelled.map((booking) => (
                  <div key={booking.id}>
                    <BookingCard booking={booking} />
                    <div className="pt-5">
                      <Divider />
                    </div>
                  </div>
                ))
              : 'no cancelled bookings!'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitterBookings;
