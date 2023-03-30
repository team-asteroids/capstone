import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { attemptTokenLogin, selectAuth } from '../../slices/authSlice';
import {
  fetchAllBookings,
  resetBookingStatus,
  selectBookings,
} from '../../slices/bookingsSlice';
import { BookingCard } from '../index';
import { Divider } from '@mui/material';

function UserBookings() {
  const dispatch = useDispatch();
  const { userAuth, token } = useSelector(selectAuth);
  // const [bookingFilter, setBookingFilter] = useState('');

  useEffect(() => {
    dispatch(attemptTokenLogin());
  }, [dispatch]);

  useEffect(() => {
    if (userAuth.id) {
      const id = userAuth.id;
      dispatch(fetchAllBookings({ id, token }));
    }

    return () => {
      dispatch(resetBookingStatus());
    };
  }, [userAuth]);

  const { allBookings } = useSelector(selectBookings);
  let pending = [];
  let approved = [];
  let completed = [];
  let cancelled = [];

  if (allBookings && allBookings.length) {
    allBookings.forEach((booking) => {
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

  // if (bookingFilter === 'approved') {
  //   const approvedBookings = allBookings.filter(
  //     (booking) => booking.status === 'approved'
  //   );
  //   bookingArr = approvedBookings;
  // }

  // if (bookingFilter === 'pending') {
  //   const approvedBookings = allBookings.filter(
  //     (booking) => booking.status === 'pending'
  //   );
  //   bookingArr = approvedBookings;
  // }
  // if (bookingFilter === 'completed') {
  //   const approvedBookings = allBookings.filter(
  //     (booking) => booking.status === 'completed'
  //   );
  //   bookingArr = approvedBookings;
  // }

  // if (bookingFilter === 'cancelled') {
  //   const approvedBookings = allBookings.filter((booking) =>
  //     ['cancelled', 'withdrawn', 'declined'].includes(booking.status)
  //   );
  //   bookingArr = approvedBookings;
  // }

  if (!userAuth && !userAuth.firstName)
    return <div className="font-rubikmono">Fetching good things...</div>;

  return (
    <div className="flex flex-col gap-5 font-rubik">
      <div id="filter" className="flex flex-row justify-between">
        <h2 className="font-rubikmono">Manage Sitter Bookings</h2>
        {/* <div>
          <select
            id="filter"
            className="bg-white-smoke border border-white-smoke text-gray-900 text-sm rounded-lg focus:ring-pale-blue focus:border-pale-blue block p-1.5 px-3 drop-shadow-sm"
            onChange={(evt) => {
              setBookingFilter(evt.target.value);
            }}
            defaultValue={bookingFilter}
          >
            <option value="">all</option>
            <option value="pending">pending</option>
            <option value="approved">approved</option>
            <option value="completed">completed</option>
            <option value="cancelled">cancelled</option>
          </select>
        </div> */}
      </div>
      <div className="h-[calc(100vh_-_20rem)] overflow-auto flex flex-col gap-5">
        <div>
          <p className="font-rubikmono text-lg pb-2">
            Review New Booking Requests ({pending.length})
          </p>
          <div className="flex flex-col gap-5">
            {pending && pending.length
              ? pending.map((booking) => (
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
}

export default UserBookings;
